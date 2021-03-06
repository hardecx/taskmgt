import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';
import { ColumnSetting } from 'src/app/models/layout.model';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-mpr',
  templateUrl: './mpr.component.html',
  styleUrls: ['./mpr.component.scss']
})
export class MprComponent extends BaseComponent implements OnInit {

  routePage = `../timeline`;
  apis='report'
  type="MPR"
  projectSettings: ColumnSetting[] = [
    {
      primaryKey: "TaskID",
      header: "Task ID",
      routerParams:true,

    },
    {
      primaryKey: "ActionItem",
      header: "Action Item",

    },
    {
      primaryKey: "TaskTypeName",
      header: "Task Type",
    },
    {
      primaryKey: "TaskDescription",
      header: "Task Description",
    },

    {
      primaryKey: "StartDate",
      header: "Start Date",
      date:true
    },
    {
      primaryKey: "EndDate",
      header: "End Date",
      date:true
    },
    {
      primaryKey: "ResponsibleOwnerName",
      header: "Responsible Owner",
    },
    {
      primaryKey: "Department",
      header: "Department",
    },
    // {
    //   primaryKey: "DepartmentHOD",
    //   header: "Department Head",
    // },

    {
      primaryKey: "Status",
      header: "Status",
    },




  ];
  d = new Date();
  date = this.d.getDate();
  month = this.d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  year = this.d.getFullYear();
  months = this.d.getMonth()

  constructor(public api:ApiService,public enums: APIENUM,public router:Router) {
    super(api, APIENUM.Task);  
  }

  ngOnInit() {
    var dateStr =(this.year + "-" + this.month + "-" + this.date).toString();

    if(this.months === 0){
      this.months = 12;
      this.year  = this.d.getFullYear() -1;
      var dateSt = (this.year + "-" + this.months + "-" + this.date).toString();
    } else {
      var dateSt =(this.year + "-" + this.months + "-" + this.date).toString();
    }
    this.readtasktype(APIENUM.Task, {
      "TaskType": this.type,
      "StartDate":dateSt,
      "EndDate":dateStr,
    });
  }

}

