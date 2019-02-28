import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermpolicyComponent } from './termpolicy.component';

describe('TermpolicyComponent', () => {
  let component: TermpolicyComponent;
  let fixture: ComponentFixture<TermpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
