import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, switchMap, map, catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from './auth.actions';
import { SigninService } from '../../../views/signin/signin.service';



@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: SigninService,
        private router: Router,
    ) { }
    // effects go here

    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: LogIn) => action.payload),
        switchMap(payload => {          
            return this.authService.logIn(payload.email, payload.password).pipe(
                map((user) => {
                    console.log("Ususario: " + user);
                    //localStorage.setItem('user',user);
                    return new LogInSuccess({ token: user.token, email: payload.email })
                }),
                catchError(error => of(new LogInFailure({ error })))
            )
        })
    );

    

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/admin/dashboard');
        })  
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );

}
