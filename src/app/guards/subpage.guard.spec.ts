import { TestBed } from '@angular/core/testing';

import SubpageGuard from './subpage.guard';

describe('SubpageGuard', () => {
  let guard: SubpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
