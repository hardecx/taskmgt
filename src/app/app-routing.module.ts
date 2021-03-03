import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { LoginComponent } from './@component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', redirectTo: 'main/dashboard', pathMatch: 'full' },
{
  path: 'main',
  loadChildren: () => import('../app/@module/main/main.module').then(m => m.MainModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:QuicklinkStrategy,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
