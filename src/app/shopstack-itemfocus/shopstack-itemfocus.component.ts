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
  constructor(  
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getItemInfo();
  }

  getItemInfo(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

  }

}
