import { TestBed, async, inject } from '@angular/core/testing';

import { IdCheckGuard } from './id-check.guard';

describe('IdCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdCheckGuard]
    });
  });

  it('should ...', inject([IdCheckGuard], (guard: IdCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
