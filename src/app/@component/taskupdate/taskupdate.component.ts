import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';
import { ColumnSetting } from 'src/app/models/layout.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.scss']
})
export class TaskupdateComponent extends BaseComponent implements OnInit {

  routePage ="../create";
  apis='task'
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

  constructor(public api:ApiService,public enums: APIENUM,public router:Router) {
    super(api, APIENUM.Task);
  }

  ngOnInit() {
    this.readbyposteduser(APIENUM.Task);
  }

}

