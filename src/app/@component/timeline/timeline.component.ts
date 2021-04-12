import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIENUM } from 'src/app/@service/api.type';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  elements: any[]= [];
  array: any = [];
  apis:any;
  id:any
  approve:boolean=false;
  create:boolean=false;
  edit:boolean=false;
  commentSection: boolean;
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
  complete:FormGroup=new FormGroup({});
  TaskType:any=[];
  Employee:any=[];
  item:any=[];
  loading:boolean=false;
  success: any="";
  error: string='';
  variable: any="";
  constructor(
    private api: ApiService,  public route: ActivatedRoute, private _fb:FormBuilder, public router: Router
  ) { }

  ngOnInit() {
    this.complete = this._fb.group({
      TaskID:['',Validators.required],
      Comment:['',Validators.required],
      Status:['',Validators.required]
    })
    this.route.paramMap.forEach((params:any) => {
      let value = params.params;
      this.apis=value['id'];
      this.variable=value['name'];
      console.log(this.apis);
      if(this.variable === "report"){
        this.commentSection = true
      }
    this.api.timelineread(APIENUM.Task, {
    			
      TaskID: this.apis
}).subscribe((res: any) => {
      this.elements = res.records;
    }, (err: any) => {

      
     
     // this.handleError(err)
     
    })
    this.api.read_one(APIENUM.Task, {TaskID:this.apis})    
    .subscribe((res:any)=>{
      this.array = res.records[0]
    }, (err: any) => {
  
        
       
      // this.handleError(err)
      
     })
    })
  }
  timeline(){
    this.router.navigateByUrl(`main/timeline/${this.apis}/${this.api}/TaskID/rer`)
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