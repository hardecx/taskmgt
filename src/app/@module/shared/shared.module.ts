import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from 'src/app/@template/table/table.component';

import { SearchboxComponent } from 'src/app/@template/searchbox/searchbox.component';

import { LoaderComponent } from 'src/app/@template/loader/loader.component';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { BackDirective } from 'src/app/@directive/back.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackComponent } from 'src/app/@component/back/back.component';
import { SuccessComponent } from 'src/app/@component/success/success.component';
import { ErrorsComponent } from 'src/app/@component/errors/errors.component';
import { StatusComponent } from 'src/app/@component/status/status.component';
import { SearchPipe, SortParamsDirective, SortPipe } from 'src/app/@pipe/search.pipe';
import { DynamicFormComponent } from 'src/app/@component/dynamic-form/dynamic-form.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [DynamicFormComponent,SortParamsDirective,SearchPipe,SortPipe,StatusComponent,TableComponent,SearchboxComponent,LoaderComponent,BackDirective,BackComponent,SuccessComponent, ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    //BrowserAnimationsModule,
    NgxChartsModule,
    ReactiveFormsModule,
   // Ng2SearchPipeModule,
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule,
    FontAwesomeModule



  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxChartsModule,
    FontAwesomeModule,
   // BrowserAnimationsModule,
    BackDirective,
   // Ng2SearchPipeModule,
   //TuiLegendItemModule,
    TableComponent,
    FormsModule,
    SearchboxComponent,
    LoaderComponent,
    BackComponent,
    StatusComponent,
    SuccessComponent, ErrorsComponent,
   SearchPipe,
   DynamicFormComponent,


  ]
})
export class SharedModule { }
