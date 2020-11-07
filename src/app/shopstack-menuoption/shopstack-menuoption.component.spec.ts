import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopstackMenuoptionComponent } from './shopstack-menuoption.component';

describe('ShopstackMenuoptionComponent', () => {
  let component: ShopstackMenuoptionComponent;
  let fixture: ComponentFixture<ShopstackMenuoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopstackMenuoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopstackMenuoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
