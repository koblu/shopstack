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
  constructor(private userAuthService: UserAuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  authorize(): boolean {
    this.userAuthService.AuthenticateUser(this.un, this.pw).subscribe(() => {
      this.userAuthService.isAuthenicated().then(auth => {
        //console.log("Auth:", auth);
        if (auth) {
          this.router.navigate(['shop']);
        } else {
          //logic to say the user failed auth.
        }
      })
    });
    
    return true;
  }

}
