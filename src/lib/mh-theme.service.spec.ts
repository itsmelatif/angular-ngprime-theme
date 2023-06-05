import { TestBed } from '@angular/core/testing';

import { MhThemeService } from './mh-theme.service';

describe('MhThemeService', () => {
  let service: MhThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MhThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
