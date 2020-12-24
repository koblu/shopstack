import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackLoginComponent } from './shopstack-login.component';

describe('ShopstackLoginComponent', () => {
  let component: ShopstackLoginComponent;
  let fixture: ComponentFixture<ShopstackLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
