import { TestBed } from '@angular/core/testing';

import { MotorpolicyserService } from './motorpolicyser.service';

describe('MotorpolicyserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotorpolicyserService = TestBed.get(MotorpolicyserService);
    expect(service).toBeTruthy();
  });
});
