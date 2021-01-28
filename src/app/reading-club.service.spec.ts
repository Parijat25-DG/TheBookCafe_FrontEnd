import { TestBed } from '@angular/core/testing';

import { ReadingClubService } from './reading-club.service';

describe('ReadingClubService', () => {
  let service: ReadingClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
