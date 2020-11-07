import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackItemfocusComponent } from './shopstack-itemfocus.component';

describe('ShopstackItemfocusComponent', () => {
  let component: ShopstackItemfocusComponent;
  let fixture: ComponentFixture<ShopstackItemfocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackItemfocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackItemfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
