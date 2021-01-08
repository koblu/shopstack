import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Option } from '../option'

var OPTIONS : Option[] = [
  { name:"Setting 1", desc: "A setting description", type:"checkbox"},
  { name:"Setting 2", desc: "A setting description", type:"slider"},
];


@Component({
  selector: 'app-shopstack-menu',
  templateUrl: './shopstack-menu.component.html',
  styleUrls: ['./shopstack-menu.component.css']
})
export class ShopstackMenuComponent implements OnInit {
  options: Option[] = OPTIONS;
  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userAuthService.logoutUser().subscribe(() => {
      this.router.navigate(['login']);
    },
    (error) => {
      console.log("Logout Error:", error);
    });
  }

}
