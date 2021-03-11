import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild,  } from '@angular/core';
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
  constructor(
    private api: ApiService,  public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.forEach((params:any) => {
      let value = params.params;
      this.apis=value['id'];
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

}