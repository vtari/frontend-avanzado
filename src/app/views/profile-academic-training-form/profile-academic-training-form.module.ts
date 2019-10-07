import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAcademicTrainingFormComponent } from './profile-academic-training-form.component';
import { ProfileAcademicTrainingRoutingModule } from './profile-academic-training-routing.module';



@NgModule({
    declarations: [ProfileAcademicTrainingFormComponent],
  imports: [
      CommonModule,
      ProfileAcademicTrainingRoutingModule
  ]
})
export class ProfileAcademicTrainingFormModule { }
