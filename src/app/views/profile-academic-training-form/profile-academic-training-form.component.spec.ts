import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAcademicTrainingFormComponent } from './profile-academic-training-form.component';

describe('ProfileAcademicTrainingFormComponent', () => {
  let component: ProfileAcademicTrainingFormComponent;
  let fixture: ComponentFixture<ProfileAcademicTrainingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAcademicTrainingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAcademicTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
