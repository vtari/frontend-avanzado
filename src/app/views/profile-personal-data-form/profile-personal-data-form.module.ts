import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalDataRoutingModule } from './profile-personal-data-routing.module';
import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';



@NgModule({
    declarations: [ProfilePersonalDataFormComponent],
  imports: [
      CommonModule,
      ProfilePersonalDataRoutingModule
  ]
})
export class ProfilePersonalDataFormModule { }
