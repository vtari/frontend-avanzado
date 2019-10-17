import { TestBed } from '@angular/core/testing';

import { ProfilePersonalDataFormService } from './profile-personal-data-form.service';

describe('ProfilePersonalDataFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePersonalDataFormService = TestBed.get(ProfilePersonalDataFormService);
    expect(service).toBeTruthy();
  });
});
