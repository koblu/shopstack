import { Component, Input, OnInit } from '@angular/core';
import { Option } from "../option"

@Component({
  selector: 'app-shopstack-menuoption',
  templateUrl: './shopstack-menuoption.component.html',
  styleUrls: ['./shopstack-menuoption.component.css']
})
export class ShopstackMenuoptionComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() desc: string;

  checkbox = "checkbox";
  slider = "slider";

  constructor() { }

  ngOnInit(): void {
  }

}
