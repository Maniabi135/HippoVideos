import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOfferComponent } from './pricing-offer.component';

describe('PricingOfferComponent', () => {
  let component: PricingOfferComponent;
  let fixture: ComponentFixture<PricingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
