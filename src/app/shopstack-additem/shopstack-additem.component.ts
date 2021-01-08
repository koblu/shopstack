import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
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
  description: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemsService.addItem(this.name, this.description, this.croppedImage, this.price);
    this.router.navigate(["shop"]);
  }

  //Image Cropper Functions
  fileChangeEvent(event: any): void{
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event.base64);
  }
  
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  
  loadImageFailed() {
    // show message
  }


}
