import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthplanComponent } from './healthplan.component';

describe('HealthplanComponent', () => {
  let component: HealthplanComponent;
  let fixture: ComponentFixture<HealthplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
