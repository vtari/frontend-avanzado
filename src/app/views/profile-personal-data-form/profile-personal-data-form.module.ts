import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePersonalDataRoutingModule } from './profile-personal-data-routing.module';
import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ProfilePersonalDataFormComponent],
  imports: [
      CommonModule,
      ProfilePersonalDataRoutingModule,
      CKEditorModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class ProfilePersonalDataFormModule { }
