import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopstackNavComponent } from './shopstack-nav/shopstack-nav.component';
import { ShopstackMainComponent } from './shopstack-main/shopstack-main.component';
import { ShopstackShopviewComponent } from './shopstack-shopview/shopstack-shopview.component';
import { ShopstackItemComponent } from './shopstack-item/shopstack-item.component';
import { ShopstackMenuComponent } from './shopstack-menu/shopstack-menu.component';
import { ShopstackMenuoptionComponent } from './shopstack-menuoption/shopstack-menuoption.component';
import { ShopstackItemfocusComponent } from './shopstack-itemfocus/shopstack-itemfocus.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopstackNavComponent,
    ShopstackMainComponent,
    ShopstackShopviewComponent,
    ShopstackItemComponent,
    ShopstackMenuComponent,
    ShopstackMenuoptionComponent,
    ShopstackItemfocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
