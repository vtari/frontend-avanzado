import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIdiomsFormComponent } from './profile-idioms-form.component';

describe('ProfileIdiomsFormComponent', () => {
  let component: ProfileIdiomsFormComponent;
  let fixture: ComponentFixture<ProfileIdiomsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIdiomsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdiomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
