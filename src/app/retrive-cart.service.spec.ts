import { TestBed } from '@angular/core/testing';

import { RetriveCartService } from './retrive-cart.service';

describe('RetriveCartService', () => {
  let service: RetriveCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetriveCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
