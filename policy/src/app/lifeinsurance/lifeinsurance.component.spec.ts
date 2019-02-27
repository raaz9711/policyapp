import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeinsuranceComponent } from './lifeinsurance.component';

describe('LifeinsuranceComponent', () => {
  let component: LifeinsuranceComponent;
  let fixture: ComponentFixture<LifeinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
