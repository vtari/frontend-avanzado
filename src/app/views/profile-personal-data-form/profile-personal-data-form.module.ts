import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalDataRoutingModule } from './profile-personal-data-routing.module';
import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
    declarations: [ProfilePersonalDataFormComponent],
  imports: [
      CommonModule,
      ProfilePersonalDataRoutingModule,
      CKEditorModule
  ]
})
export class ProfilePersonalDataFormModule { }
