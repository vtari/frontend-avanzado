import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIdiomsFormComponent } from './profile-idioms-form.component';
import { ProfileIdiomsRoutingModule } from './profile-idioms-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ProfileIdiomsFormComponent],
  imports: [
      CommonModule,
      ProfileIdiomsRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ]
})
export class ProfileIdiomsFormModule { }
