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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';



@NgModule({
  declarations: [SortParamsDirective, SearchPipe,SortPipe,StatusComponent,TableComponent,SearchboxComponent,LoaderComponent,BackDirective,BackComponent,SuccessComponent, ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule,
    JwPaginationModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule,
    FontAwesomeModule
  ],
  exports: [
    HttpClientModule,
    JwPaginationComponent,
    ReactiveFormsModule,
    CommonModule,
    NgxChartsModule,
    FontAwesomeModule,
    BackDirective,
    TableComponent,
    FormsModule,
    SearchboxComponent,
    LoaderComponent,
    BackComponent,
    StatusComponent,
    SuccessComponent, 
    ErrorsComponent,
    SearchPipe,
  ]
})
export class SharedModule { }
