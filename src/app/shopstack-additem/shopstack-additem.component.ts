import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopstack-additem',
  templateUrl: './shopstack-additem.component.html',
  styleUrls: ['./shopstack-additem.component.css']
})
export class ShopstackAdditemComponent implements OnInit {
  name: string;
  price: number;
  image_loc: string;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  addItem(): void {
    //this.itemsService.addItem(name, "A new item!", image_loc, price)
  }

}
