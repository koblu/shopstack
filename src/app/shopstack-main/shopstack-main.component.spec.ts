import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackMainComponent } from './shopstack-main.component';

describe('ShopstackMainComponent', () => {
  let component: ShopstackMainComponent;
  let fixture: ComponentFixture<ShopstackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
