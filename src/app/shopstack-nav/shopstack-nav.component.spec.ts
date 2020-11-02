import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackNavComponent } from './shopstack-nav.component';

describe('ShopstackNavComponent', () => {
  let component: ShopstackNavComponent;
  let fixture: ComponentFixture<ShopstackNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
