import { ItemsService } from './../items.service';
import { Item } from '../item';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopstack-shopview',
  templateUrl: './shopstack-shopview.component.html',
  styleUrls: ['./shopstack-shopview.component.css']
})
export class ShopstackShopviewComponent implements OnInit {
  items: Item[] = [];
  constructor( private itemService: ItemsService) { 

  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
