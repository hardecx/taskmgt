import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIENUM } from './api.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.baseUrl;
  constructor(private _http: HttpClient) { }


  read(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/read.php`, value);
  }


  read_one(type: APIENUM  | string, value: any) {






    return this._http.post(`${this.url}${type.toString()}/read_one.php`, value);
  }
  read_one2(type: APIENUM  | string, value: any) {
    var formData: any = new FormData();
    formData.append(Object.keys(value), Object.values(value));

    return this._http.post(`${this.url}${type.toString()}/read_one.php`, value);
  }

  create(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/create.php`, value);

  }
  employee(type: APIENUM  | string) {
    return this._http.post(`${this.url}${type.toString()}/getemployee.php`,{});
  }

  update(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/update.php`, value);


  }

  delete(type: APIENUM  | string, value: any) {

    return this._http.post(`${this.url}${type.toString()}/delete.php`, value);

  }
  readtasktype(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/readtasktype.php`, value);
  }
  special(type: APIENUM  | string, value: any, slash:any) {
    return this._http.post(`${this.url}${type.toString()}/${slash.toString()}.php`, value);
  }
  readbyresponsibleowner(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/readbyresponsibleowner.php`, value);
  }
  readbyposteduser(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/readbyposteduser.php`, value);
  }
  
  completetask(type: APIENUM  | string, value: any) {















    
    return this._http.post(`${this.url}${type.toString()}/completetask.php`, value);
  }
  timelineread(type: APIENUM  | string, value: any) {
    return this._http.post(`${this.url}${type.toString()}/timelineread.php`, value);
  }
  }

