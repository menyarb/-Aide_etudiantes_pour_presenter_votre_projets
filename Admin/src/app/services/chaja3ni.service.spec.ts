import { TestBed } from '@angular/core/testing';

import { Chaja3niService } from './chaja3ni.service';

describe('Chaja3niService', () => {
  let service: Chaja3niService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chaja3niService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
