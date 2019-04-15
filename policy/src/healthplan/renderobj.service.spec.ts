import { TestBed } from '@angular/core/testing';

import { RenderobjService } from './renderobj.service';

describe('RenderobjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenderobjService = TestBed.get(RenderobjService);
    expect(service).toBeTruthy();
  });
});
