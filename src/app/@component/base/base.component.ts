import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, pipe, Subscription } from "rxjs";
import { distinctUntilKeyChanged, exhaustMap, first, publishReplay, refCount, share, shareReplay, take } from "rxjs/operators";

import { ApiService } from 'src/app/@service/api.service';
import { APIENUM } from 'src/app/@service/api.type';



@Component({
  selector: "app-base",
  template: ` <p>base works!</p> `,
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent implements OnInit {
  baseItems: Array<any> = [];
  loading = false;
  Aoading = false;
  error: string = '';
  p: number = 0;
  a: number = 0;
  r: number = 0;
  err: string = "";
  emptys = "";
  success: any;

  searchText: any;

  constructor(public api: ApiService, public enums: APIENUM) {

  }

  ngOnInit() {

  }
  read(item: APIENUM, value = {}) {
    this.loading = true;
    this.error = "";
    this.api
      .read(item, value)




      .subscribe(
        (res: any) => {
          this.loading = false;
          this.baseItems = res.records;
          this.p = this.baseItems.filter(
            (r: any) => r.Status == "Pending"
          ).length;
          this.a = this.baseItems.filter(
            (r: any) => r.Status == "Approved"
          ).length;
          this.r = this.baseItems.filter(
            (r: any) => r.Status == "Rejected"
          ).length;


        },
        (err: any) => {


          this.loading = false;
          this.baseItems = []
          if (err.status === 0 && err.error instanceof ProgressEvent) {
            // A client-side or network error occurred. Handle it accordingly.

            this.error = "Please check your internet";
          } else {
            this.error = err.error.message;
          }

        }
      );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.


  }





  readone(item: APIENUM, value: any) {

    this.loading = true;
    this.error = "";
    this.api
      .read_one(item, value)




      .subscribe(
        (res: any) => {

          this.loading = false;
          this.baseItems = res.records;
          this.p = this.baseItems.filter(
            (r: any) => r.Status == "Pending"
          ).length;
          this.a = this.baseItems.filter(
            (r: any) => r.Status == "Approved"
          ).length;
          this.r = this.baseItems.filter(
            (r: any) => r.Status == "Rejected"
          ).length;


        },
        (err: any) => {


          this.loading = false;
          this.baseItems = []
          if (err.status === 0 && err.error instanceof ProgressEvent) {
            // A client-side or network error occurred. Handle it accordingly.

            this.error = "Please check your internet";
          } else {
            this.error = err.error.message;
          }

        }
      );
  }
  readonef(item: APIENUM, value: any) {

    this.loading = true;
    this.error = "";
    this.api
      .read_one(item, value)




      .subscribe(
        (res: any) => {

          this.loading = false;
          this.baseItems = res.records;


        },
        (err: any) => {


          this.loading = false;

          if (err.status === 0 && err.error instanceof ProgressEvent) {
            // A client-side or network error occurred. Handle it accordingly.

            this.error = "Please check your internet";
          } else {
            this.error = err.error.message;
          }

        }
      );
  }
  passValue(value: any) {

    this.searchText = value;

  }
  readtasktype(item: APIENUM, value: any){
    
    this.loading = true;
    this.error = "";
    this.api
      .readtasktype(item, value)




      .subscribe(
        (res: any) => {

          this.loading = false;
          this.baseItems = res.records;


        },
        (err: any) => {


          this.loading = false;

          if (err.status === 0 && err.error instanceof ProgressEvent) {
            // A client-side or network error occurred. Handle it accordingly.

            this.error = "Please check your internet";
          } else {
            this.error = err.error.message;
          }

        }
      );
  }
}
