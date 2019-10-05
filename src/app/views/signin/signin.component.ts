import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    signingForm: FormGroup;

    // Crear formulario de login
    createFormGroup() {
        return new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
        })
    }
    constructor(private fakeBackend: FakeBackendService) {
        this.signingForm = this.createFormGroup();
    }
    ngOnInit() {
    }

    //limpiar formulario
    resetForm() {
        this.signingForm.reset();
    }

}
