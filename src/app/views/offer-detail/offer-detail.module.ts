import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailComponent } from './offer-detail.component';
import { OfferDetailRoutingModule } from './offer-detail-routing.module';

import { OffersRoutingModule } from '../offers/offers-routing.module';



@NgModule({
    declarations: [OfferDetailComponent],
  imports: [
      CommonModule,
      OfferDetailRoutingModule
  ]
})
export class OfferDetailModule { }
