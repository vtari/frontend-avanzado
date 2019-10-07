import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePersonalDataFormComponent } from './profile-personal-data-form.component';

const routes: Routes = [
    {
        path: 'profile-personal-data-form/:id',
        component: ProfilePersonalDataFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilePersonalDataRoutingModule { }
