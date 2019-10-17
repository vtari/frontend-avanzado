import { Injectable } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';
import { LevelStudy } from '../../shared/models/study.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileAcademicTrainingFormService {
    
    
    constructor(private fakeBackend: FakeBackendService) {

    }

    async getAllTitlesUniversity() {
        return this.fakeBackend.createDb().titlesUniversity;
    }

    async getAllTitlesCycles() {
        return this.fakeBackend.createDb().titlesCycles;
    }

    async getAllMunicipes() {
        return this.fakeBackend.createDb().municipes;
    }

    async getAllProvinces() {
        return this.fakeBackend.createDb().provinces;
    }

    async getAllGradeTypes() {
        return this.fakeBackend.createDb().gradeTypes;
}

    async getAllFamilyTypes() {
        return this.fakeBackend.createDb().familyTypes;
    }
    async getAllEducationalCenter() {
        return this.fakeBackend.createDb().educationalCenter;
    }

    async getAllTitleTypes() {      
        return this.fakeBackend.createDb().titleTypes;
    }

    


}
