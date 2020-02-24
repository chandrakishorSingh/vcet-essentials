import { TestBed } from '@angular/core/testing';

import { CollegeScheduleService } from './college-schedule.service';

describe('CollegeScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeScheduleService = TestBed.get(CollegeScheduleService);
    expect(service).toBeTruthy();
  });
});
