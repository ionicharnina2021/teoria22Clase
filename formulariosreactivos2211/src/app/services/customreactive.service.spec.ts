import { TestBed } from '@angular/core/testing';

import { CustomreactiveService } from './customreactive.service';

describe('CustomreactiveService', () => {
  let service: CustomreactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomreactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
