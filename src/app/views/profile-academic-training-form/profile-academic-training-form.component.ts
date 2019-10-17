import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/models/user.model';
import { Study, LevelStudy, TitleStudy } from '../../shared/models/study.model';
import { SigninService } from '../signin/signin.service';
import { ProfileAcademicTrainingFormService } from './profile-academic-training-form.service';

@Component({
  selector: 'app-profile-academic-training-form',
  templateUrl: './profile-academic-training-form.component.html',
  styleUrls: ['./profile-academic-training-form.component.scss']
})
export class ProfileAcademicTrainingFormComponent implements OnInit {
    private image;
    private user: User;
    private study: Study;
    private studies: Study[];
    private id: any;
    private mode: String;
    private isEdit: boolean;
    private isNew: boolean;
    private academicTrainingForm;
    private universityForm;
    private cycleForm;
    private titleUniversityTypes;
    private provinces;
    private municipes;
    private grades;
    private institutionTypes;
    private titlesCycles;
    private familyTypes;
    private titleTypes: LevelStudy[];
    private showUniversityForm: boolean;
    private showCycleForm: boolean;

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private formBuilder: FormBuilder, private signinService: SigninService, private profileAcedemicService: ProfileAcademicTrainingFormService) {

        this.showUniversityForm = false;
        this.showCycleForm = false;
        //image for upload file
        this.image = "assets/img/file-upload.png";
        //id de usuario
        this.id = this.activatedRoute.snapshot.params.id;
        //Modo de pantalla
        this.mode = this.activatedRoute.snapshot.params.mode;
        // usuario actual
        this.user = signinService.user;
        //Tipos de título
        this.setAllTitleTypes();
        //Familias profesionales
        this.setFamilies();
        //Grados
        this.setGrades();
        //Ciclos
        this.setTitlesCycles();
        //Titulos universitarios
        this.setTitlesUniversity();
        //Provincias
        this.setProvinces();
        //Municipios
        this.setMunicipes();
        //Institutos
        this.setInstitutions();
      
        if (this.mode == "edit") {
            this.isEdit = true;
            this.isNew = false;
            //Recorremos los estudios del usuario y comprobamos que estudio quiere modificar
            for (var i = 0; i < this.user.studies.length; i++) {
                if (this.user.studies[i].uid == this.id) {
                    this.study = this.user.studies[i];
                    if (this.study.level.name.includes("universitario")) {
                        this.showUniversityForm = true;
                        this.showCycleForm = false;
                    } else if (this.study.level.name.includes("formativo")) {
                        this.showUniversityForm = false;
                        this.showCycleForm = true;
                    }
                }
            }

        } else {
            this.isNew = true;
            this.isEdit = false;
        }         
       
        //Formulario
        this.academicTrainingForm = this.formBuilder.group({
            inputTitleType: new FormControl('', [])         
        });
        // Formulario Título Universitario
        this.universityForm = this.formBuilder.group({            
            inputCenterName: new FormControl('', []),
            inputTitle: new FormControl('', []),
            inputTitleDate: new FormControl('', [Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}')]),
            inputBilingualStudies: new FormControl('', []),
            inputUploadFile: new FormControl('', [])

        });

        //Formulario Ciclo Formativo
        this.cycleForm = this.formBuilder.group({
            inputCenterName: new FormControl('', []),
            inputProFamily: new FormControl('', []),
            inputGrade: new FormControl('', []),
            inputCycles: new FormControl('', []),
            inputTitleDate: new FormControl('', [Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))/[0-9]{4}')]),
            inputDualStudies: new FormControl('', []),
            inputBilingualStudies: new FormControl('', []),
            inputUploadFile: new FormControl('', [])


        });
    }

  ngOnInit() {
    }
    private get dateUniversity() { return this.universityForm.get('inputTitleDate'); }
    private get dateCycle() { return this.cycleForm.get('inputTitleDate'); }

    private getStudy(study) {
        return study.uid === this.id;
    }
    private onChange(value: string) {
        if (value.includes("universitario")) {           
            this.showUniversityForm = true;
            this.showCycleForm = false;

        } else if (value.includes("formativo")) {           
            this.showCycleForm = true;
            this.showUniversityForm = false;
        } 
        
    }

    private async setAllTitleTypes() {
        this.titleTypes = await this.profileAcedemicService.getAllTitleTypes();
        
    }

    private async setProvinces() {
        this.provinces = await this.profileAcedemicService.getAllProvinces();
    }

    private async setMunicipes() {
        this.municipes = await this.profileAcedemicService.getAllMunicipes();
    }

    private async setGrades() {
        this.grades = await this.profileAcedemicService.getAllGradeTypes();
    }

    private async setFamilies() {
        this.familyTypes = await this.profileAcedemicService.getAllFamilyTypes();
    }

    private async setTitlesCycles() {
        this.titlesCycles = await this.profileAcedemicService.getAllTitlesCycles();
    }

    private async setTitlesUniversity() {
        this.titleUniversityTypes = await this.profileAcedemicService.getAllTitlesUniversity();
    }

    private async setInstitutions() {
        this.institutionTypes = await this.profileAcedemicService.getAllEducationalCenter();
    }






}
