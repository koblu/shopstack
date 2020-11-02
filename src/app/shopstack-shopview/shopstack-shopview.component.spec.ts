import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackShopviewComponent } from './shopstack-shopview.component';

describe('ShopstackShopviewComponent', () => {
  let component: ShopstackShopviewComponent;
  let fixture: ComponentFixture<ShopstackShopviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackShopviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackShopviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
