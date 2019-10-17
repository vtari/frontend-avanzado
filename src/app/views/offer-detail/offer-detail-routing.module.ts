import { NgModule } from '@angular/core';
import { OfferDetailComponent } from './offer-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/helpers/auth.guard';


const routes: Routes = [
    {
        path: 'offer-detail/:id',
        component: OfferDetailComponent,
        canActivate: [AuthGuard]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfferDetailRoutingModule { }
