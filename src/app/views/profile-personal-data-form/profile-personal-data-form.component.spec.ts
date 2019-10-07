import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';

describe('ProfilePersonalDataFormComponent', () => {
  let component: ProfilePersonalDataFormComponent;
  let fixture: ComponentFixture<ProfilePersonalDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePersonalDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePersonalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
