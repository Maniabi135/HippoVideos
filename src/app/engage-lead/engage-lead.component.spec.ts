import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageLeadComponent } from './engage-lead.component';

describe('EngageLeadComponent', () => {
  let component: EngageLeadComponent;
  let fixture: ComponentFixture<EngageLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngageLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
