import { TaskupdateComponent } from './../../@component/taskupdate/taskupdate.component';
import { OtherComponent } from './../../@component/other/other.component';
import { EmmComponent } from './../../@component/emm/emm.component';
import { MprComponent } from './../../@component/mpr/mpr.component';
import { TasktableComponent } from './../../@component/tasktable/tasktable.component';
import { TaskComponent } from './../../@component/task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/@component/home/home.component';
import { TimelinetableComponent } from 'src/app/@component/timelinetable/timelinetable.component';
import { TimelineComponent } from 'src/app/@component/timeline/timeline.component';

const routes2: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [ AuthAdminGuard], invoice
    children: [
 
      { path: 'create/:id/:api/:value/:name', component: TaskComponent,data: { animationState: 'Three' } },
      { path: 'table', component: TasktableComponent,data: { animationState: 'Two' } },
      { path: 'timelinetable', component: TimelinetableComponent,data: { animationState: 'Two' } },
      { path: 'timeline/:id/:api/:value/:name', component: TimelineComponent,data: { animationState: 'Three' } },
      { path: 'taskupdate', component: TaskupdateComponent,data: { animationState: 'Two' } },
      { path: 'mpr', component: MprComponent,data: { animationState: 'Two' } },
      { path: 'emm', component: EmmComponent,data: { animationState: 'Two' } },
      { path: 'others', component: OtherComponent,data: { animationState: 'Two' } },

  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes2)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
