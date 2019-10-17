import { TestBed } from '@angular/core/testing';

import { ProfileIdiomsFormService } from './profile-idioms-form.service';

describe('ProfileIdiomsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileIdiomsFormService = TestBed.get(ProfileIdiomsFormService);
    expect(service).toBeTruthy();
  });
});
