import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

    constructor(private fakeBackend: FakeBackendService) { }
    async getOffers() {
        return this.fakeBackend.createDb().offers;
    }

    
}
