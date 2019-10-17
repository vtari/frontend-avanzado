import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileIdiomsFormComponent } from './profile-idioms-form.component';
import { AuthGuard } from '../../shared/helpers/auth.guard';


const routes: Routes = [
    {
        path: 'profile-idioms-form/:mode/:id',
        component: ProfileIdiomsFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileIdiomsRoutingModule { }
