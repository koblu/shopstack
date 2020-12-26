import { TokenInterceptor } from './auth/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopstackNavComponent } from './shopstack-nav/shopstack-nav.component';
import { ShopstackMainComponent } from './shopstack-main/shopstack-main.component';
import { ShopstackShopviewComponent } from './shopstack-shopview/shopstack-shopview.component';
import { ShopstackItemComponent } from './shopstack-item/shopstack-item.component';
import { ShopstackMenuComponent } from './shopstack-menu/shopstack-menu.component';
import { ShopstackMenuoptionComponent } from './shopstack-menuoption/shopstack-menuoption.component';
import { ShopstackItemfocusComponent } from './shopstack-itemfocus/shopstack-itemfocus.component';
import { ShopstackAdditemComponent } from './shopstack-additem/shopstack-additem.component';
import { ShopstackLoginComponent } from './shopstack-login/shopstack-login.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ShopstackNavComponent,
    ShopstackMainComponent,
    ShopstackShopviewComponent,
    ShopstackItemComponent,
    ShopstackMenuComponent,
    ShopstackMenuoptionComponent,
    ShopstackItemfocusComponent,
    ShopstackAdditemComponent,
    ShopstackLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
