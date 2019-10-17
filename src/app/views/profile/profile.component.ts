import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { SigninService } from '../signin/signin.service';
import { Study } from '../../shared/models/study.model';
import { Language } from '../../shared/models/language.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private imageURL: String;
    private user: User;
    private studies: Study[];
    private languages: Language[];
    private id: any;
    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private signingService: SigninService) {
        this.imageURL = "../assets/img/profile.png";
        this.id = this.activatedRoute.snapshot.params.id;
        this.user = signingService.user;
        this.studies = this.user.studies;
        this.languages = this.user.languages;
    }

  ngOnInit() {
    }

    private editPersonalData() {
        this.router.navigate(['/profile-personal-data-form/'+this.id]);
    }

    private editStudies(uid) {
        this.router.navigate(['/profile-academic-training-form/edit/' + uid]);
    }

    private newStudies() {
        this.router.navigate(['/profile-academic-training-form/new/' + this.id]);
    }

    private deleteStudies(study) {
       
       this.studies.splice(study, 1);
       this.toastService.success("El elemento ha sido eliminado con éxito.");
           
    }

    private editLanguage(uid) {
        this.router.navigate(['/profile-idioms-form/edit/' + uid]);
    }

    private newLanguage() {
        this.router.navigate(['/profile-idioms-form/new/' + this.id]);
    }

    private deleteLanguage(language) {
        this.languages.splice(language, 1);
        this.toastService.success("El elemento ha sido eliminado con éxito.");
    }
    

}
