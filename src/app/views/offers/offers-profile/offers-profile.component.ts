import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/storage/app.states';
import { GetOffers } from '../../../shared/storage/offers/offers.actions';


@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {
  offers: Offer[] = [];
    constructor(private profileService: ProfileService, private store: Store<AppState>) {
        this.selectOffers();
        this.store.dispatch(new GetOffers(this.offers));

  }

  private selectOffers() {
      this.offers = this.profileService.user.offers;
      
  }

  ngOnInit() {}
}
