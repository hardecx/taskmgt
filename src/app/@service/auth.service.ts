import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
//import { APIENUM } from "./enum";
import { JWTService } from "./jwt.service";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiUrl = environment.baseUrl;
  authToken: any;
  user: any;
  tokenSubscription = new Subscription();

  constructor(
    private _http: HttpClient,
    private router: Router,
    private jwtHelper: JWTService
  ) {}

  Login(data: any) {
    return this._http.post(`${this.apiUrl}login.php`, data);
  }



  storeUserData(resp: any) {
    let payload = this.jwtHelper.parseJwt(resp.jwt);


    localStorage.setItem('token',resp.jwt);
    sessionStorage.setItem('Menu','Task')
    sessionStorage.setItem('CustomerID',resp.data.CustomerID)
    sessionStorage.setItem('Username',resp.data.Username);
    sessionStorage.setItem('PWFName',resp.data.PWFName);
   sessionStorage.setItem("Department", resp.data.Department);
   sessionStorage.setItem("Location", resp.data.Location)
   sessionStorage.setItem("Email", resp.data.Email)
    // sessionStorage.setItem("Email", payload.Email);
    // sessionStorage.setItem("Admin", payload.Admin);
    // sessionStorage.setItem("exp", payload.exp);
    // this.expirationCounter(this.timeout);
  }

  expirationCounter(timeout:any) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null)
      .pipe(delay(timeout))
      .subscribe((expired) => {
        this.logout();
        this.router.navigate(["/login"]);

        return true
      });
  }



  logout() {
    this.tokenSubscription.unsubscribe();
    sessionStorage.clear();
  }
}
