import { TestBed } from '@angular/core/testing';

import { ProfileAcademicTrainingFormService } from './profile-academic-training-form.service';

describe('ProfileAcademicTrainingFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileAcademicTrainingFormService = TestBed.get(ProfileAcademicTrainingFormService);
    expect(service).toBeTruthy();
  });
});
