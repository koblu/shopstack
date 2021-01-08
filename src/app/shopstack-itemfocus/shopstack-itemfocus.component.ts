import { ItemsService } from './../items.service';
import { Item } from './../item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Review } from '../review';


@Component({
  selector: 'app-shopstack-itemfocus',
  templateUrl: './shopstack-itemfocus.component.html',
  styleUrls: ['./shopstack-itemfocus.component.css']
})
export class ShopstackItemfocusComponent implements OnInit {
  id: number;
  item: Item;
  reviews: Review[];
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
    
    this.id = (+this.route.snapshot.paramMap.get('id')); //Our items index, locally, is zero indexed, but the mysql db isnt
    this.itemService.getItem(this.id).subscribe(item => {this.item = item[0]; console.log(item)});
    //this.itemService.getItemReviews(id).subscribe(reviews => {this.reviews = reviews});
  }

}
