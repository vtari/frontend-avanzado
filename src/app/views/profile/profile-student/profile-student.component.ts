import { Component, Input } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { GetProfile, UpdateProfile, UserActionTypes, LoadUser } from '../../../shared/storage/user/user.actions';
import { AppState } from '../../../shared/storage/app.states';
import * as fromUsers from '../../../shared/storage/user/user.reducers';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
    user: User;
    user$: Observable<User>;
    constructor(private profileService: ProfileService, private store: Store<AppState>) {
        this.user = this.profileService.user;
        this.store.dispatch(new LoadUser(this.user));
        this.user$ = this.store.select(state => state.userState);
        this.user$.toPromise().then(result => console.log(result.email));
        this.store.dispatch(new GetProfile());
  }

    
   

  deleteStudy(studyID: number) {
    const studies = this.user.studies;
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert('Error: Study not found');
      return;
    }
      studies.splice(index, 1);
      
      this.store.dispatch(new UpdateProfile(this.user));
  //  this.profileService.updateProfile(this.user);
  }
  deleteLanguage(languageID: any) {
    const languages = this.user.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
      languages.splice(index, 1);
      
      this.store.dispatch(new UpdateProfile(this.user));
    //this.profileService.updateProfile(this.user);
  }
}
