import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { ProfilePersonalDataFormService } from './profile-personal-data-form.service';
import { SigninService } from '../signin/signin.service';
import { Municipe, Province, DocumentType, User } from '../../shared/models/user.model';


@Component({
  selector: 'app-profile-personal-data-form',
  templateUrl: './profile-personal-data-form.component.html',
  styleUrls: ['./profile-personal-data-form.component.scss']
})
export class ProfilePersonalDataFormComponent implements OnInit {
    private user: User;
    private id: any;
    private image;
    public editorAboutMe = ClassicEditor;
    public editorOtherCompetences = ClassicEditor;
    private editorData;
    private personalDataForm: FormGroup;
    private provinces: Province[];
    private municipes: Municipe[];
    private documentTypes: DocumentType[];

      

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private formBuilder: FormBuilder, private dataFormService: ProfilePersonalDataFormService, private signingService: SigninService) {
        
        //Provincias
        this.setProvinces();
        //Municipios
        this.setMunicipes();
        //Documento identificativo
        this.setDocumentTypes();
        //id de usuario
        this.id = this.activatedRoute.snapshot.params.id;
        // usuario actual almacenado en localStorage
        this.user = signingService.user;
        //Obtenemos la imagen de perfil
        this.image = this.user.avatar_hash;
        //Formulario
        this.personalDataForm = this.formBuilder.group({
            inputName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]),
            inputSurname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]),
            inputAvatar: new FormControl('', []),
            inputBirthdayDate: new FormControl('', []),
            inputPhone1: new FormControl('', []),
            inputPhone2: new FormControl('', []),
            inputDocument: new FormControl('', []),
            inputNumber: new FormControl('', []),
            inputAddress: new FormControl('', []),
            inputProvince: new FormControl('', []),
            inputMunicipe: new FormControl('', []),
            inputLicense: new FormControl('', [Validators.maxLength(20)]),
            inputAboutMe: new FormControl('', [Validators.maxLength(150)]),
            inputOtherCompetences: new FormControl('', [Validators.maxLength(150)]),
        });

        
    }

  ngOnInit() {
  }

    private get inputAvatar() { return this.personalDataForm.get('inputAvatar'); }
    private changeValidation(value) {
        // patrones
        var DNI_REGEX = /^(\d{8})([A-Z])$/;
        var  PASSPORT_REGEX = /^[a-z]{3}[0-9]{6}[a-z]?$/i;
        var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
        if (value == "NIF/NIE") {
            this.personalDataForm.get('inputNumber').setValidators(Validators.pattern(DNI_REGEX));
        } else if (value == "Passaporte") {
            this.personalDataForm.get('inputNumber').setValidators(Validators.pattern(PASSPORT_REGEX));
        } else {
            this.personalDataForm.get('inputNumber').setValidators(Validators.pattern(NIE_REGEX));
        }
    }

    public onChange({ editor }: ChangeEvent) {
        const data = editor.getData();

        console.log(data);
    }

    private async setProvinces() {
        this.provinces = await this.dataFormService.getAllProvinces();
    }

    private async setMunicipes() {
        this.municipes = await this.dataFormService.getAllMunicipes();
    }

    private async setDocumentTypes() {
        this.documentTypes = await this.dataFormService.getAllDocumentTypes();
    }
}
