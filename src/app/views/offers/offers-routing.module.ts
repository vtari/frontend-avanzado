import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersDetailWrapperComponent } from './offers-detail/offers-detail.component-wrapper';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent
  },
  {
    path: 'my-offers',
    component: OffersComponent,
    data: { my_offers: true }
  },
  {
    path: ':id',
    component: OffersDetailWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {}
