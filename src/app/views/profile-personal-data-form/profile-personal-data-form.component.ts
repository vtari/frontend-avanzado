import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-profile-personal-data-form',
  templateUrl: './profile-personal-data-form.component.html',
  styleUrls: ['./profile-personal-data-form.component.scss']
})
export class ProfilePersonalDataFormComponent implements OnInit {

    private user: String;
    private id: any;
    public Editor = ClassicEditor;
    private personalDataForm: FormGroup;
    private provinces;
    private municipes;
    private documentTypes;

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private formBuilder: FormBuilder) {

        //Provincias
        this.provinces = ['Alicante', 'Valencia', 'Barcelona', 'Castellón', 'Cádiz'];
        //Municipios
        this.municipes = ['Valencia', 'Bétera', 'Onil', 'Reus', 'Chiclana de la Frontera'];
        //Documento identificativo
        this.documentTypes = ['NIF', 'Pasaporte', 'Otro'];
        //id de usuario
        this.id = this.activatedRoute.snapshot.params.id;
        // usuario actual almacenado en localStorage
        this.user = JSON.parse(localStorage.getItem("currentUser"));
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
   
       

}
