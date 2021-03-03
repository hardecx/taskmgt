import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@service/auth.service';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 _isloading: boolean=false;

  auth: FormGroup;
  error: string="";

  constructor(private _fb:FormBuilder,private _router:Router,private _auth:AuthService) {
    this.auth = this._fb.group({
      user:['',Validators.required],
      pass:['',Validators.required]
    })
  }

   ngOnInit() {



   }
   icon = faToolbox;

   onLogin(){
    this._isloading = true;


    this._auth.Login(this.auth.value)

    .subscribe(
      (res:any)=>{

      this._auth.storeUserData(res);
      this._router.navigateByUrl('main');

    },(err:any)=>{
      this._isloading=false;

      if (err.status === 0 && err.error instanceof ProgressEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        this.error='Client side error:Please check your internet';
      }else{
        this.error=err.error.Error;
      }
setTimeout(()=>{
  this.error="";
},5000)


    })




     }
    }
