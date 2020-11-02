import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackItemComponent } from './shopstack-item.component';

describe('ShopstackItemComponent', () => {
  let component: ShopstackItemComponent;
  let fixture: ComponentFixture<ShopstackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
