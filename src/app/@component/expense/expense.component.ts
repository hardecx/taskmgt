import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';
import { ColumnSetting } from 'src/app/models/layout.model';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent extends BaseComponent implements OnInit {

  routePage ="../bili";
  apis='stt'
  
  projectSettings: ColumnSetting[] = [

    {
      primaryKey: "SupplierID",
      header: "Supplier ID",
      routerParams:true
    },
    {
      primaryKey: "SupplierName",
      header: "Supplier Name",
    },
    {
      primaryKey: "Telephone1",
      header: "Telephone",
     // routerParams:true
    },
    {
      primaryKey: "Email",
      header: "Email Address",
    }


  ];

  constructor(public api:ApiService,public enums: APIENUM,public router:Router) {




    super(api, APIENUM.SUPPLIER);
  }


  ngOnInit() {
    this.read(APIENUM.SUPPLIER);
  }

}
// SupplierID
// SupplierName
// Telephone1
// Email
