import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileAcademicTrainingFormComponent } from './profile-academic-training-form.component';
import { AuthGuard } from '../../shared/helpers/auth.guard';


const routes: Routes = [
    {
        path: 'profile-academic-training-form/:mode/:id',
        component: ProfileAcademicTrainingFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileAcademicTrainingRoutingModule { }
