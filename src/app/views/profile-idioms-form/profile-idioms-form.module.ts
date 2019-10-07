import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileIdiomsFormComponent } from './profile-idioms-form.component';
import { ProfileIdiomsRoutingModule } from './profile-idioms-routing.module';



@NgModule({
    declarations: [ProfileIdiomsFormComponent],
  imports: [
      CommonModule,
      ProfileIdiomsRoutingModule
  ]
})
export class ProfileIdiomsFormModule { }
