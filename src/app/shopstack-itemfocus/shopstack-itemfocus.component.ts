import { ItemsService } from './../items.service';
import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-shopstack-itemfocus',
  templateUrl: './shopstack-itemfocus.component.html',
  styleUrls: ['./shopstack-itemfocus.component.css']
})
export class ShopstackItemfocusComponent implements OnInit {
  id: number;
  item: Item;
  constructor(  
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemsService
    ) {
      
    }

  ngOnInit(): void {
    this.getItemInfo();
  }

  getItemInfo(): void {
    
    let id : number = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id+1).subscribe(item => {this.item = item[0]; console.log(item)});
  }

}
