import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileIdiomsFormComponent } from './profile-idioms-form.component';


const routes: Routes = [
    {
        path: 'profile-idioms-form/:id',
        component: ProfileIdiomsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileIdiomsRoutingModule { }
