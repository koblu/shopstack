import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopstack-shopview',
  templateUrl: './shopstack-shopview.component.html',
  styleUrls: ['./shopstack-shopview.component.css']
})
export class ShopstackShopviewComponent implements OnInit {
  items: number[] = [];
  constructor() { 
    for( let i = 0; i < 10; i++) {
      this.items.push(i);
    }

  }

  ngOnInit(): void {
  }

}
