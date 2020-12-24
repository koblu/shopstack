import { ShopstackLoginComponent } from './shopstack-login/shopstack-login.component';
import { ShopstackMainComponent } from './shopstack-main/shopstack-main.component';
import { ShopstackItemfocusComponent } from './shopstack-itemfocus/shopstack-itemfocus.component';
import { ShopstackMenuComponent } from './shopstack-menu/shopstack-menu.component';
import { ShopstackShopviewComponent } from './shopstack-shopview/shopstack-shopview.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'
import { ShopstackAdditemComponent } from './shopstack-additem/shopstack-additem.component';

const routes: Routes = [
  {
    path: "", 
    component: ShopstackMainComponent,
    canActivate: [AuthGuard],
    children: [
          { path: '', redirectTo: 'shop', pathMatch: 'full'},
          { path: 'shop', component: ShopstackShopviewComponent},
          { path: 'menu', component: ShopstackMenuComponent},
          { path: 'item/:id', component: ShopstackItemfocusComponent},
          { path: 'add', component: ShopstackAdditemComponent}
    ],
  },
  {
    path: "login",
    component: ShopstackLoginComponent
  }
  //{path: "menu", component: ShopstackMenuComponent},
  //{path: "item/:id", component: ShopstackItemfocusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
