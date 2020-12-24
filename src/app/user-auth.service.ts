import { of, Observable } from 'rxjs';
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
    return this.http.post<any>(`${ITEM_API_URL}/user`, {username: username, passhash: password}, {withCredentials: true});

    
    /*if (username === this.fake_un && password === this.fake_pw) {
      this.loggedin = true;
      localStorage.setItem("authenticated", "true")
    } else {
      this.loggedin = false;
      localStorage.setItem("authenticated", "false")
    }*/
    
    return of(auth_resp);
  }
  

  isAuthenicated() : boolean {
    
    var user_status = localStorage.getItem("authenticated");
    if (user_status === "true") {
      return true;
    } 
    return false;
  }
}
