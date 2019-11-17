import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Store, select } from '@ngrx/store';
import { User } from '../../shared/models/user.model';
import { LogIn } from '../../shared/storage/auth/auth.actions';
import { AppState } from '../../shared/storage/app.states';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {
  
    user: User;
    loginForm: FormGroup;
    submitted = false;   
  errorLogin = false;
  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
      private router: Router,
      private store: Store<AppState>
  ) {
     
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

    onSubmit(): void {
        const payload = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        this.store.dispatch(new LogIn(payload));
    }

   
}
