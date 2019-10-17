import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileIdiomsFormService {

    constructor(private fakeBackend: FakeBackendService) {

    }

    async getAllLanguagesName() {
        return this.fakeBackend.createDb().languages;
    }

    async getAllLanguageLevels() {
        return this.fakeBackend.createDb().languageLevels;
    }
}
