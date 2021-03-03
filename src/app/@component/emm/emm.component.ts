import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';
import { ColumnSetting } from 'src/app/models/layout.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-emm',
  templateUrl: './emm.component.html',
  styleUrls: ['./emm.component.scss']
})
export class EmmComponent extends BaseComponent implements OnInit {

  // routePage ="../edit";
  apis='customer'
  projectSettings: ColumnSetting[] = [
    {
      primaryKey: "ID",
      header: "Task ID",
      routerParams:true,
      colHid:true

    },
    {
      primaryKey: "ActionItem",
      header: "ActionItem",

    },
    {
      primaryKey: "TaskType",
      header: "Task Type",
    },
    {
      primaryKey: "TaskDescription",
      header: "Task Description",
    },

    {
      primaryKey: "StartDate",
      header: "Start Date",
    },
    {
      primaryKey: "EndDate",
      header: "End Date",
    },
    {
      primaryKey: "ResponsibleOwnerName",
      header: "Responsible Owner",
    },
    {
      primaryKey: "Department",
      header: "Department",
    },
    {
      primaryKey: "DepartmentHOD",
      header: "DepartmentHOD",
    },






  ];

  constructor(public api:ApiService,public enums: APIENUM,public router:Router) {




    super(api, APIENUM.Task);
  }


  ngOnInit() {
    this.readtasktype(APIENUM.Task, {
      "TaskType": "EMM"
    });
  }

}

