import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/models/user.model';
import { Study } from '../../shared/models/study.model';

@Component({
  selector: 'app-profile-academic-training-form',
  templateUrl: './profile-academic-training-form.component.html',
  styleUrls: ['./profile-academic-training-form.component.scss']
})
export class ProfileAcademicTrainingFormComponent implements OnInit {
    private user: User;
    private study: Study;
    private studies: Study[];
    private id: any;
    private academicTrainingForm;
    private universityForm;
    private cycleForm;
    private titleTypes;
    private showUniversityForm: boolean;
    private showCycleForm: boolean;

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router,
        private formBuilder: FormBuilder) {

        this.showUniversityForm = false;
        this.showCycleForm = false;

        this.titleTypes = ['Título universitario', 'Ciclo formativo', 'otro título'];
        //id de usuario
        this.id = this.activatedRoute.snapshot.params.id;
        console.log("Este es el uid" + this.id);
        // usuario actual almacenado en localStorage
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        //Estudios
        for (var i = 0; i < this.user.studies.length; i++) {            
            if (this.user.studies[i].uid == this.id) {
                this.study = this.user.studies[i];
            }
        }        
        console.log("Estdio: " + this.study.title.name);
       
        //Formulario
        this.academicTrainingForm = this.formBuilder.group({
            inputTitleType: new FormControl('', [])         
        });
        // Formulario Título Universitario
        this.universityForm = this.formBuilder.group({            
            inputCenterName: new FormControl('', []),
            inputTitle: new FormControl('', []),
            inputTitleDate: new FormControl('', []),
            inputBilingualStudies: new FormControl('', []),
            inputUploadFile: new FormControl('', [])

        });

        //Formulario Ciclo Formativo
        this.cycleForm = this.formBuilder.group({
            inputCenterName: new FormControl('', []),
            inputProFamily: new FormControl('', []),
            inputGrade: new FormControl('', []),
            inputCycles: new FormControl('', []),
            inputTitleDate: new FormControl('', []),
            inputDualStudies: new FormControl('', []),
            inputBilingualStudies: new FormControl('', []),
            inputUploadFile: new FormControl('', [])


        });
    }

  ngOnInit() {
  }

    private getStudy(study) {
        return study.uid === this.id;
}
    private onChange(value) {
        if (value == 'Título universitario') {
            this.showUniversityForm = true;
            this.showCycleForm = false;


        } else if (value == 'Ciclo formativo') {
            this.showCycleForm = true;
            this.showUniversityForm = false;
        }
        
    }

}
