import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackItemreviewComponent } from './shopstack-itemreview.component';

describe('ShopstackItemreviewComponent', () => {
  let component: ShopstackItemreviewComponent;
  let fixture: ComponentFixture<ShopstackItemreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackItemreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackItemreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
