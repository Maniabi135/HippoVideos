import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferBenifitComponent } from './refer-benifit.component';

describe('ReferBenifitComponent', () => {
  let component: ReferBenifitComponent;
  let fixture: ComponentFixture<ReferBenifitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferBenifitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferBenifitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
