import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SigninService } from '../signin/signin.service';
import { ProfileIdiomsFormService } from './profile-idioms-form.service';
import { LanguageName, LanguageLevel, Language } from '../../shared/models/language.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-profile-idioms-form',
  templateUrl: './profile-idioms-form.component.html',
  styleUrls: ['./profile-idioms-form.component.scss']
})
export class ProfileIdiomsFormComponent implements OnInit {

    private isEdit: boolean;
    private isNew: boolean;
    private isVisible: boolean;
    private id;
    private mode: String;
    private languageNames: LanguageName[];
    private levels: LanguageLevel[];
    private languageForm;
    private user: User;
    private language: Language;
    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private formBuilder: FormBuilder, private signinService: SigninService,
        private idiomsService: ProfileIdiomsFormService) {

        //Id del idioma   
        this.id = this.activatedRoute.snapshot.params.id;
        //Modo de pantalla
        this.mode = this.activatedRoute.snapshot.params.mode;
        //Language names
        this.getLanguagesName();
        //Levels
        this.getLanguagesLevel();
        //Usuario
        this.user = signinService.user;
        //Visibilidad del input others
        this.isVisible = false;

        if (this.mode == "edit") {
            this.isEdit = true;
            this.isNew = false;
            //Recorremos los estudios del usuario y comprobamos que estudio quiere modificar
            for (var i = 0; i < this.user.languages.length; i++) {
                if (this.user.languages[i].uid == this.id) {
                    this.language = this.user.languages[i];
                }
            }

        } else {
            this.isNew = true;
            this.isEdit = false;
        }

        //Creación del formulario       
        this.languageForm = this.formBuilder.group({
            inputLanguages: new FormControl('', []),
            inputLevel: new FormControl('', []),
            inputTitleDate: new FormControl('', [Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}')]),
            inputOthers: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)])
        });

    }

  ngOnInit() {
  }

    private get date() { return this.languageForm.get('inputTitleDate'); }
    private get inputOthers() { return this.languageForm.get('inputOthers'); }

    private async getLanguagesName() {
        this.languageNames = await this.idiomsService.getAllLanguagesName();
    }

    private async getLanguagesLevel() {
        this.levels = await this.idiomsService.getAllLanguageLevels();
    }

    private onChange() {
        this.isVisible = true;
    }
}
