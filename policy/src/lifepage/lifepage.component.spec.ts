import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifepageComponent } from './lifepage.component';

describe('LifepageComponent', () => {
  let component: LifepageComponent;
  let fixture: ComponentFixture<LifepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
