import { ShopstackItemfocusComponent } from './shopstack-itemfocus/shopstack-itemfocus.component';
import { ShopstackMenuComponent } from './shopstack-menu/shopstack-menu.component';
import { ShopstackShopviewComponent } from './shopstack-shopview/shopstack-shopview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: "shop", component: ShopstackShopviewComponent},
  {path: "menu", component: ShopstackMenuComponent},
  {path: "shop/item/:id", component: ShopstackItemfocusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
