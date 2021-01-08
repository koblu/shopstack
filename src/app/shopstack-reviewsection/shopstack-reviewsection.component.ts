import { ItemsService } from './../items.service';
import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../review';

const SELECT_RATING = "assets/cart.svg";
const UNSELECT_RATING = "assets/menu.svg";

@Component({
  selector: 'app-shopstack-reviewsection',
  templateUrl: './shopstack-reviewsection.component.html',
  styleUrls: ['./shopstack-reviewsection.component.css']
})
export class ShopstackReviewsectionComponent implements OnInit {
  reviews : Review[] = [];
  reviewbody: string;
  rating: number = 0;
  oldrating: number = 0;
  displayrating: string[] = [];
  @Input() itemId: number;

  constructor(private itemService: ItemsService) {
    for (let i = 0; i < 5; i++) {
      this.displayrating.push(UNSELECT_RATING);
    }
   }


  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.itemService.getItemReviews(this.itemId).subscribe(reviews => {this.reviews = reviews});
  }

  rateOf(rating :number): void {
    console.log(rating);
    for(let i = 0; i < 5; i++) {
      if(i <= rating) this.displayrating[i]=SELECT_RATING;
      else this.displayrating[i]=UNSELECT_RATING;
    }
    
    this.rating = rating;
  }

}
