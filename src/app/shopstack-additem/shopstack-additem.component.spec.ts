import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackAdditemComponent } from './shopstack-additem.component';

describe('ShopstackAdditemComponent', () => {
  let component: ShopstackAdditemComponent;
  let fixture: ComponentFixture<ShopstackAdditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackAdditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackAdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
