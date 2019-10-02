import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActOnComponent } from './act-on.component';

describe('ActOnComponent', () => {
  let component: ActOnComponent;
  let fixture: ComponentFixture<ActOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
