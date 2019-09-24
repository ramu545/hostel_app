import { TestBed } from '@angular/core/testing';

import { TanentsService } from './tanents.service';

describe('TanentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TanentsService = TestBed.get(TanentsService);
    expect(service).toBeTruthy();
  });
});
