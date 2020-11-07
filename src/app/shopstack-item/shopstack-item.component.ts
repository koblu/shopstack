import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopstack-item',
  templateUrl: './shopstack-item.component.html',
  styleUrls: ['./shopstack-item.component.css']
})
export class ShopstackItemComponent implements OnInit {
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
