import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';
import { Offer } from '../../shared/models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferDetailService {
    private offer: Offer;
    constructor(private fakeService: FakeBackendService) { }

    private getOffers() {
        return this.fakeService.createDb().offers;
    }
    async getDetailJob(id) {
        const offers = this.getOffers();
        this.offer = offers.find((offer: any) => offer.id == id);     
        return this.offer;
    }
}
