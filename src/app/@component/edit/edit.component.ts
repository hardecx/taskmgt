import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';
import { QuestionControlService } from 'src/app/@service/control.service';
import { QuestionBase } from 'src/app/models/edit-base';
import { TextboxQuestion } from 'src/app/models/edit-textbox';
import {Location} from '@angular/common';
import { DropdownQuestion } from 'src/app/models/edit-dropdown';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  questions: QuestionBase<string>[] = [];
  form: FormGroup = new FormGroup({});
  id: any;
  apis: any;
  value: any;
  error: string="";

  success: any;
  loading2: boolean=false;
  loading3: boolean=false;
  ;
  payLoad = '';
  loading:boolean=false;

  constructor(private location:Location,public router:Router,public route: ActivatedRoute, private qcs: QuestionControlService, private api: ApiService) { }

  ngOnInit() {


    //  this.form = this.qcs.toFormGroup(this.questions);
    this.routes();
  }

  onSubmit() {
    this.loading2=true;
    this.payLoad = JSON.stringify(this.form.getRawValue());

    this.api.update(this.apis,this.form.getRawValue())
    .subscribe( (res:any)=>{
      this.loading2=false;

      this.getValues()
 this.success = res.message;
      //this._router.navigateByUrl('main');

      setTimeout(()=>{
        this.success="";
      },2000)

    },
    (err:any)=>{
      this.loading2=false;

      if (err.status === 0 && err.error instanceof ProgressEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        this.error='Client side error:Please check your internet';
      }else{
        this.error=err.message;
      }
setTimeout(()=>{
  this.error="";
},2000)


    })
  }

  routes() {

    this.route.paramMap.forEach((params: any) => {

      let value = params.params;

      this.id = value['id'];
      this.apis = value['api'];
      this.value = value['value'];

      this.getValues()



    });

  }

  getValues() {
    let index = 1;
    this.loading=true;
    this.error="";
    let value;
    this.questions=[];
    const questions: QuestionBase<string>[]=[];
    this.api.read_one2(this.apis, { [this.value]: this.id }).subscribe((res: any) => {

if(res['records'][0]){
  value =res['records'][0];
}else{
  value=res;
}

      for (const key of Object.keys(value)) {

        if(key !== 'DateCreated' && key!='Status'){
          this.questions.push(new TextboxQuestion({
            key: key,
            label: key,
            controlType: 'textbox',
            order: index,
            value: value[key],
            required: true,

          }))
          index++;
        }else{
          if(key !== 'DateCreated' && key=='Status'){
            this.questions.push(
              new DropdownQuestion({
                key: key,
                label: 'Status',
                value: value[key],
                options: [
                  {key: 'Active',  value: 'Active'},
                  {key: 'Inactive',  value: 'Inactive'},

                ],
                order: index
              }),

            )
          }
        }
        //this.myform
        this.loading=false;
        this.form = this.qcs.toFormGroup(this.questions);

        }



    },err => {


      this.loading = false;

      if (err.status === 0 && err.error instanceof ProgressEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        this.error = 'Client side error:Please check your internet';
      } else {
        this.error = err.error.message;
      }




    })

  }

  remove(){
    this.loading3=true;
    this.api.delete(this.apis,{[this.value]:this.id}).subscribe((res:any)=>{
      this.loading3=false;
      this.success = res.message;
      this.router.navigateByUrl('main/item');
      setTimeout(()=>{
        this.success="";

      },2000)

    },(err:any)=>{
      this.loading3=false;

      if (err.status === 0 && err.error instanceof ProgressEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        this.error='Client side error:Please check your internet';
      }else{
        this.error=err.message;
      }
setTimeout(()=>{
  this.error="";
},2000)


    })

  }
}
