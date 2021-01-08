import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackReviewsectionComponent } from './shopstack-reviewsection.component';

describe('ShopstackReviewsectionComponent', () => {
  let component: ShopstackReviewsectionComponent;
  let fixture: ComponentFixture<ShopstackReviewsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackReviewsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackReviewsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
