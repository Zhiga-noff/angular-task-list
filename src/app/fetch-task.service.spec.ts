import { TestBed } from '@angular/core/testing';

import { FetchTaskService } from './fetch-task.service';

describe('FetchTaskService', () => {
  let service: FetchTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
