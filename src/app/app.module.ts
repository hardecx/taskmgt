import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@component/login/login.component';
import { SharedModule } from './@module/shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { APIENUM } from './@service/api.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './@service/api.service';
import {ConnectionServiceModule,} from 'ng-connection-service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    QuicklinkModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ConnectionServiceModule

  ],
  providers: [
    APIENUM,
    ApiService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorServices,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
