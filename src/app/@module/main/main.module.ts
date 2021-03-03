import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServices } from 'src/app/@service/interceptor';
import { DashboardComponent } from '../../@component/dashboard/dashboard.component';
import { HomeComponent } from '../../@component/home/home.component';
import { HeaderComponent } from 'src/app/@template/header/header.component';
import { NavMenuComponent } from 'src/app/@template/nav-menu/nav-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/@component/base/base.component';
import { ApiService } from 'src/app/@service/api.service';
import { SharedModule } from '../shared/shared.module';
import { ExpenseComponent } from '../../@component/expense/expense.component';
import { EditComponent } from '../../@component/edit/edit.component';
import { QuestionControlService } from 'src/app/@service/control.service';
import { TaskComponent } from '../../@component/task/task.component';
import { TasktableComponent } from '../../@component/tasktable/tasktable.component';
import { MprComponent } from '../../@component/mpr/mpr.component';
import { EmmComponent } from '../../@component/emm/emm.component';
import { OtherComponent } from '../../@component/other/other.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent,NavMenuComponent,HeaderComponent,BaseComponent, ExpenseComponent, EditComponent, TaskComponent, TasktableComponent, MprComponent, EmmComponent, OtherComponent],
  imports: [
    CommonModule,
    NgbModule,
    MainRoutingModule,
    SharedModule,



  ],
  providers:[
    ApiService,
    QuestionControlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServices,
      multi: true
    }
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
