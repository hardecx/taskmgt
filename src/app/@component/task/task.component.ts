import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  id:any
  approve:boolean=false;
  create:boolean=false;
  edit:boolean=false;
  apis:any;
  name:any;
  array:any;
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
  complete:FormGroup=new FormGroup({});
  TaskType:any=[];
  Employee:any=[];
  item:any=[];
  loading:boolean=false;
  success: any="";
  error: string='';
  constructor(public router: Router,private _fb:FormBuilder,private api:ApiService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.complete = this._fb.group({
      TaskID:['',Validators.required],
      Comment:['',Validators.required],
      Status:['',Validators.required]
    })

    this.task = this._fb.group({
      ActionItem:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required],
      TaskType:['',Validators.required],
      TaskDescription:['',Validators.required],
      ResponsibleOwnerName:['',Validators.required],
      Department:['', Validators.required],
      DepartmentHOD:['',Validators.required],
      ResponsibleOwnerEmail:['',Validators.required]
    })

    if(this.apis!== "0"){
    this.route.paramMap.forEach((params:any) => {
      let value = params.params;
      this.apis=value['id'];
      this.name=value['name'];
      if(this.name == "input"){
        this.edit = true
        this.api.read(APIENUM.TaskType, {}).subscribe((res:any)=>{
          console.log(res.records);
          this.TaskType =res.records;
    
        }, (err => {
          this.error = err.message
        }))
        this.api.employee(APIENUM.Task).subscribe((res:any)=>{
          this.Employee =res.records;
          console.log(this.Employee)
    this.showpage = true
        }, (err => {
    
        }))
      }
      if(this.name == "update"){
        this.approve = true
      }
      if(this.name == "create"){
        this.create = true
        this.api.read(APIENUM.TaskType, {}).subscribe((res:any)=>{
          console.log(res.records);
          this.TaskType =res.records;
    
        }, (err => {
          this.error = err.message
        }))
        this.api.employee(APIENUM.Task).subscribe((res:any)=>{
          this.Employee =res.records;
             console.log(this.Employee)
             this.showpage = true
        }, (err => {
    
        }))
      }

      if(this.apis!== "0"){
        this.api.read_one(APIENUM.Task, {TaskID:this.apis})    
        .subscribe((res:any)=>{
          this.array = res.records[0]
          this.id = this.array.AccountID
          
          this.task = this._fb.group({
            TaskID:[this.array.TaskID,Validators.required],
            ActionItem:[this.array.ActionItem,Validators.required],
            StartDate:[this.array.StartDate,Validators.required],
            EndDate:[this.array.EndDate,Validators.required],
            TaskType:[this.array.TaskType,Validators.required],
            TaskTypeName:[this.array.TaskTypeName,Validators.required],
            TaskDescription:[this.array.TaskDescription,Validators.required],
            ResponsibleOwnerName:[this.array.ResponsibleOwnerName,Validators.required],
            Department:[this.array.Department, Validators.required],
            DepartmentHOD:[this.array.DepartmentHOD,Validators.required],
            ResponsibleOwnerEmail:[this.array.ResponsibleOwnerEmail,Validators.required]
          })
 
          this.success = res.message;
    
          // setTimeout(() => {
          //   this.success = "";
          //   this.router.navigateByUrl('main/Account');
    
          // }, 2000)
    
    
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

    });
  }
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
  // get C() {
  //   return this.complete.controls;
  // }
createTask() {
    this.submitted = true;
    if (this.task.invalid) {
     this.scrollToError();
    } else {
      this.submitted = false;
      this.creat();
    }
  }

  creat(){
    this.loading=true;
    this.task.disable();

console.log({...this.task.value})
    this.api.create(APIENUM.Task,{...this.task.value, TaskType:this.TaskID,  EndDate:this.task.value.EndDate, StartDate:this.task.value.StartDate}).subscribe((res:any)=>{
      this.loading = false;
      this.task.reset();
      this.success = res.message;
      this.router.navigateByUrl('main/table');
      setTimeout(() => {
        this.success = "";
        // this.router.navigateByUrl('main/sales');

      }, 2000)


    }, (err => {

      this.task.enable();
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
  let value = this.TaskType.find((x:any) => x.ID === this.task.value.TaskType)
  console.log(value)
  this.TaskDescription = value.Description
  this.task.get("TaskDescription")?.setValue(this.TaskDescription)
  this.TaskID = this.task.value.TaskType;
  this.TaskName = value.TaskTypeName
  if(this.TaskName === "Others"){
    this.task.get("TaskDescription")?.setValue("")
    this.TaskDes = true
  }else{
    this.TaskDes = false
  }
}
onChange1() {
  //item.Department+'-'+item.DepartmentHead+'-'+item.Email+'-'+item.EmployeeName
  let value = this.Employee.find((x:any) => x.EmployeeName === this.task.value.ResponsibleOwnerName)
  console.log(value)
  this.task.get("DepartmentHOD")?.setValue(value.DepartmentHead)
  this.task.get("Department")?.setValue(value.Department)
  this.task.get("ResponsibleOwnerEmail")?.setValue(value.Email)
}
update(){
  this.loading=true;
  this.task.disable();

  this.api.update(APIENUM.Task,{...this.task.value, EndDate:this.task.value.EndDate, StartDate:this.task.value.StartDate})
  .subscribe((res:any)=>{
    this.loading = false;
    this.task.reset();
    this.success = res.message;
    this.router.navigateByUrl('main/table');
    setTimeout(() => {
      this.success = "";

    }, 2000)


  }, (err => {
    this.task.enable();
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

approved(){
  this.complete.disable();

  this.api.completetask(APIENUM.Task,this.complete.value)
  .subscribe((res:any)=>{
    this.complete.reset();
    this.success = res.message;
    this.router.navigateByUrl('main/taskupdate');
    this.timeline()
    setTimeout(() => {
      this.success = "";

    }, 2000)


  }, (err => {
    this.complete.enable();

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
timeline(){
this.router.navigateByUrl(`main/timeline/${this.apis}/${this.api}/TaskID/${this.name}`)
}
approveTask() {
  this.complete.get("TaskID")?.setValue(this.array.TaskID)
  console.log(this.complete.value)
 
  if (this.complete.value.Comment === "") {
   this.error = "Please add comment"
  } else if(this.complete.value.Status === ""){
    this.error = "Please add status"
  }else{

    this.submitted = false;
    this
      . approved();


  }
}
}
