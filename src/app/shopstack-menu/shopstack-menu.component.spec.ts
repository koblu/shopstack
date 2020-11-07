import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackMenuComponent } from './shopstack-menu.component';

describe('ShopstackMenuComponent', () => {
  let component: ShopstackMenuComponent;
  let fixture: ComponentFixture<ShopstackMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
