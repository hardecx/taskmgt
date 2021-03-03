import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  ResponsibleOwnerEmail:any;
  ResponsibleOwnerName:any;
  selectedDevice:any;
  showpage: boolean = false;
  TaskDescription:any;
  TaskID:any;
  TaskName:any;
  DepartmentHead:any;
  Department:any;
  TaskDes: boolean = false;
  submitted: boolean = false;
  task:FormGroup=new FormGroup({});
  TaskType:any=[];
  Employee:any=[];
  item:any=[];
  loading:boolean=false;
  success: any="";
  error: string='';
  constructor(public router: Router,private _fb:FormBuilder,private api:ApiService) { }

  ngOnInit() {


    this.api.read(APIENUM.TaskType, {}).subscribe((res:any)=>{
      this.TaskType =res.records;

    }, (err => {

    }))
    this.api.employee(APIENUM.Task).subscribe((res:any)=>{
      this.Employee =res.records;
      console.log(this.Employee)
this.showpage = true
    }, (err => {

    }))
    this.task = this._fb.group({
      ActionItem:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required],
      TaskType:['',Validators.required],
      TaskDescription:['',Validators.required],
      ResponsibleOwner:['',Validators.required],
      ResponsibleOwnerName:['',Validators.required],
      Department:['', Validators.required],
      DepartmentHOD:['',Validators.required],
      ResponsibleOwnerEmail:['',Validators.required]
    })
  }

  scrollTo(el: any): void {
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  scrollToError(): void {
    const firstElementWithError = document.querySelector(
      ".ng-invalid[formControlName]"
    );


    this.scrollTo(firstElementWithError);
  }
  get T() {
    return this.task.controls;
  }

createTask() {
    this.submitted = true;


    if (this.task.invalid) {
     this.scrollToError();
    } else {

      this.submitted = false;
      this
        . creat();


    }
  }

  creat(){
    this.loading=true;
    this.task.disable();


    this.api.create(APIENUM.Task,{...this.task.value, TaskType:this.TaskID}).subscribe((res:any)=>{
      this.loading = false;
      this.task.reset();
      this.success = res.message;

      setTimeout(() => {
        this.success = "";
        // this.router.navigateByUrl('main/sales');

      }, 2000)


    }, (err => {


      this.loading = false;

      if (err.status === 0 && err.error instanceof ProgressEvent) {
        // A client-side or network error occurred. Handle it accordingly.

        this.error = 'Client side error:Please check your internet';
      } else {
        this.error = err.message;
      }
      setTimeout(() => {
        this.error = "";
      }, 2000)



    })

    )
  }
  selectedType(value:any){
    console.log(value);
    console.log("the selected value is " + value.ID);
}
onChange() {
  let vents = this.task.value.TaskType;
  this.TaskDescription = vents.split('-')[1];
  this.task.get("TaskDescription")?.setValue(this.TaskDescription)
  this.TaskID =  vents.split('-')[0];
  this.TaskName =  vents.split('-')[2];
  if(this.TaskName === "Others"){
    this.task.get("TaskDescription")?.setValue("")
    this.TaskDes = true
  }else{
    this.TaskDes = false
  }
}
onChange1() {
  let vents = this.task.value.ResponsibleOwner;
  this.DepartmentHead = vents.split('-')[1];
  this.task.get("DepartmentHOD")?.setValue(this.DepartmentHead)
  this.Department =  vents.split('-')[0];
  this.ResponsibleOwnerEmail =  vents.split('-')[2];
  this.task.get("Department")?.setValue(this.Department)
  this.task.get("ResponsibleOwnerEmail")?.setValue(this.ResponsibleOwnerEmail)
  this.ResponsibleOwnerName =  vents.split('-')[3];
  this.task.get("ResponsibleOwnerName")?.setValue(this.ResponsibleOwnerName)
}
}
