import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from 'src/environments/environment';
import { catchError, filter } from 'rxjs/operators';
@Injectable()
export class InterceptorServices implements HttpInterceptor {
    value:any;
    constructor(

      ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = localStorage.getItem('token');



            const customReq = request.clone({
                headers: request.headers.set("Authorization", " Bearer " +idToken)
            });
            return next.handle(customReq)
            .pipe(
              catchError(error => {
                if (error.status === 401 || error.status === 403) {
                  window.location.href = "/task";
                }
                return throwError(error);
              }));

          //   .subscribe((res)=>{

          //   },err => {
          //     // onError
          //
          //     if (err instanceof HttpErrorResponse) {
          //
          //         if (err.status === 401) {
          //             window.location.href = "/login";
          //         }
          //     }
          //     return throwError(err);
          // }) as any;;


    }
}
