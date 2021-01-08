import { of, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const ITEM_API_URL = "http://127.0.0.1:8080";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedin : boolean = false;
  fake_un = "koblu";
  fake_pw = "password";
  
  
  constructor(private http: HttpClient) {
    
  }

  AuthenticateUser(username, password: string): Observable<any> {
    var auth_resp: boolean;
    return this.http.post(`${ITEM_API_URL}/user`, {username: username, passhash: password}, {withCredentials: true, responseType: 'text'})
    .pipe (catchError((error) => {
      return throwError(error.message);
    })
    );//.pipe((resp)=>{console.log(resp); return resp;});

    
    /*if (username === this.fake_un && password === this.fake_pw) {
      this.loggedin = true;
      localStorage.setItem("authenticated", "true")
    } else {
      this.loggedin = false;
      localStorage.setItem("authenticated", "false")
    }*/
    
    return of(auth_resp);
  }
  

  isAuthenicated(): Promise<boolean> {
    console.log("We're checking to see if we can go!")
    return this.http.post<any>(`${ITEM_API_URL}/token`, {}, {withCredentials: true}).toPromise()
    .then(
      (status) => {
        console.log("Can we go? -> ", status.authenticated);
        return status.authenticated;
      }
    );
     /* 
    var user_status = localStorage.getItem("authenticated");
    if (user_status === "true") {
      return of(true);
    } 
    return of(false);
    */
    
  }

  logoutUser(): Observable<Object> {
    return this.http.post(`${ITEM_API_URL}/logout`, {}, {withCredentials: true, responseType: 'text'}).pipe((resp)=>{console.log(resp); return resp;});
  }
}
