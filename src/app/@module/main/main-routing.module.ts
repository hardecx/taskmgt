import { OtherComponent } from './../../@component/other/other.component';
import { EmmComponent } from './../../@component/emm/emm.component';
import { MprComponent } from './../../@component/mpr/mpr.component';
import { TasktableComponent } from './../../@component/tasktable/tasktable.component';
import { TaskComponent } from './../../@component/task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from 'src/app/@component/dashboard/dashboard.component';
import { EditComponent } from 'src/app/@component/edit/edit.component';
// import { ExpenseComponent } from 'src/app/@component/expense/expense.component';
import { HomeComponent } from 'src/app/@component/home/home.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     // canActivate: [ AuthAdminGuard], invoice
//     children: [{ path: 'item', component: DashboardComponent,data: { animationState: 'Two' } },
//     { path: 'expenses', component: ExpenseComponent,data: { animationState: 'Three' } },
//     { path: 'dashboard', component: TaskComponent,data: { animationState: 'Two' } },
//     { path: 'table', component: TasktableComponent,data: { animationState: 'Two' } },
//     { path: 'edit/:id/:api/:value', component: EditComponent,data: { animationState: 'Two' } }
//     ],
//   },
// ];
const routes2: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [ AuthAdminGuard], invoice
    children: [
 
      { path: 'dashboard', component: TaskComponent,data: { animationState: 'Two' } },
      { path: 'table', component: TasktableComponent,data: { animationState: 'Two' } },
      { path: 'mpr', component: MprComponent,data: { animationState: 'Two' } },
      { path: 'emm', component: EmmComponent,data: { animationState: 'Two' } },
      { path: 'others', component: OtherComponent,data: { animationState: 'Two' } },
    { path: 'edit/:id/:api/:value', component: EditComponent,data: { animationState: 'Two' } },

  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes2)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
