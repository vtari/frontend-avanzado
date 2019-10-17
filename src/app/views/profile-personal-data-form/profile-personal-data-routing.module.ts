import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';
import { AuthGuard } from '../../shared/helpers/auth.guard';

const routes: Routes = [
    {
        path: 'profile-personal-data-form/:id',
        component: ProfilePersonalDataFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilePersonalDataRoutingModule { }
