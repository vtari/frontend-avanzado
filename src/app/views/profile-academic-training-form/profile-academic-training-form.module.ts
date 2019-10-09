import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAcademicTrainingFormComponent } from './profile-academic-training-form.component';
import { ProfileAcademicTrainingRoutingModule } from './profile-academic-training-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ProfileAcademicTrainingFormComponent],
  imports: [
      CommonModule,
      ProfileAcademicTrainingRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class ProfileAcademicTrainingFormModule { }
