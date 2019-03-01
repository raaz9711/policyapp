import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorpageComponent } from './motorpage.component';

describe('MotorpageComponent', () => {
  let component: MotorpageComponent;
  let fixture: ComponentFixture<MotorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
