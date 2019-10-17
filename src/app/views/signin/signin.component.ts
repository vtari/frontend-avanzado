import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';
import { Router } from "@angular/router";
import { setTheme } from 'ngx-bootstrap/utils';
import { SigninService } from './signin.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    private signinForm: FormGroup;
    private imageURL: String;
    private submitted =  false;
    

    constructor(private fakeBackend: FakeBackendService, private router: Router, private formBuilder: FormBuilder,
        private signinService: SigninService, private toastService: ToastrService) {
        setTheme('bs4'); 
        this.signinForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        });
        this.imageURL = "../assets/img/uoc_nuevo_logo.jpg";
        
    }
    ngOnInit() {
    }

    get form() { return this.signinForm; }
    get email() { return this.signinForm.get('email'); }
    get password() { return this.signinForm.get('password');}


    //login
    async login() {
        this.submitted = true;
        if (this.signinForm.valid) {

            var response = await this.signinService.login(this.email.value, this.password.value);          
            if (response != null) {
                this.router.navigate(['/dashboard/' + response.id]);

            } else {
                this.toastService.error('El usuario o contraseña son incorrectos', 'Error', { timeOut: 3000 });

            }        
            
        } else {
            this.toastService.error('El usuario o contraseña son incorrectos', 'Error', { timeOut: 3000});
        }

        
    }

    
     
    //remember password
    rememberPassword() {
        this.router.navigate(['/forgot-password/']);
    }
    //limpiar formulario
    resetForm() {
        this.signinForm.reset();
    }

}
