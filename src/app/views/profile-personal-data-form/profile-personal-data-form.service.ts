import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilePersonalDataFormService {

    constructor(private fakeBackend: FakeBackendService) { }

    async getAllMunicipes() {
        return this.fakeBackend.createDb().municipes;
    }

    async getAllProvinces() {
        return this.fakeBackend.createDb().provinces;
    }

    async getAllDocumentTypes() {
        return this.fakeBackend.createDb().documentTypes;
    }
}
