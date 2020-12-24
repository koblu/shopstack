import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopstack-login',
  templateUrl: './shopstack-login.component.html',
  styleUrls: ['./shopstack-login.component.css']
})
export class ShopstackLoginComponent implements OnInit {

  un: string;
  pw: string;
  auth: boolean;
  constructor(private userAuthService: UserAuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  authorize(): boolean {
    let jwt_token = this.cookieService.get("SESSIONID");
    console.log(jwt_token, "test", this.cookieService.getAll());
    this.userAuthService.AuthenticateUser(this.un, this.pw).subscribe();
    this.router.navigate(['shop'])
    return true;
  }

}
