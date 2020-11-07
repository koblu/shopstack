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
  constructor() { }

  ngOnInit(): void {
  }

}
