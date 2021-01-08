import { Review } from './../review';
import { AfterContentChecked, AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopstack-itemreview',
  templateUrl: './shopstack-itemreview.component.html',
  styleUrls: ['./shopstack-itemreview.component.css']
})
export class ShopstackItemreviewComponent implements OnInit {
  @Input() review: Review;
  @Input() review_id: number;
  show_more: boolean;
  show: boolean;
  body_class: string = "body";
  body: any;

  constructor() { }

  ngOnInit(): void {
    this.checkLimit();
  }

  checkLimit () {
    //console.log(element);
    if (this.review.body.length > 150 ) {
      this.show_more = true;
    } else {
      this.show_more = false;
    }
  }
}
