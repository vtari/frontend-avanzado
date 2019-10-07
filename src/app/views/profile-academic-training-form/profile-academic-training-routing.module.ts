import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileAcademicTrainingFormComponent } from './profile-academic-training-form.component';


const routes: Routes = [
    {
        path: 'profile-academic-training-form/:id',
        component: ProfileAcademicTrainingFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileAcademicTrainingRoutingModule { }
