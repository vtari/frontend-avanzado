import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY, of, Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';
import { UserActionTypes, UpdateProfileSuccess, UpdateProfileFailure, GetProfileSuccess, GetProfileFailure, LoadUserSuccess, LoadUserFailure } from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

    @Effect()
    UpdateProfile = this.actions$.pipe(
        ofType(UserActionTypes.UPDATE_PROFILE),
        mergeMap(({ user }) =>
            this.profileService.updateProfile({ user }).pipe(              
                map(() => new UpdateProfileSuccess({ user })),             
                catchError((error) => of(new UpdateProfileFailure({ error })))
            )
        )    
    );


    @Effect({ dispatch: false })
    UpdateProfileFailure: Observable<any> = this.actions$.pipe(
        ofType(UserActionTypes.UPDATE_PROFILE_FAILURE)
    );

    @Effect()
    GetProfile = this.actions$.pipe(
        ofType(UserActionTypes.GET_PROFILE),
        mergeMap(({ user }) =>
            this.profileService.loadProfile().pipe(
                map(() => new GetProfileSuccess({ user })),
                catchError((error) => of(new GetProfileFailure({ error })))
            )
        )
    );

    @Effect({ dispatch: false })
    GetProfileFailure: Observable<any> = this.actions$.pipe(
        ofType(UserActionTypes.GET_PROFILE_FAILURE)
    );


    @Effect()
    LoadProfile = this.actions$.pipe(
        ofType(UserActionTypes.LOAD_USER),
        mergeMap(({ user }) =>
            this.profileService.loadUser({user}).pipe(
                map(() => new LoadUserSuccess({ user })),
                catchError((error) => of(new LoadUserFailure({ error })))
            )
        )
    );

    @Effect({ dispatch: false })
    LoadUserFailure: Observable<any> = this.actions$.pipe(
        ofType(UserActionTypes.LOAD_USER_FAILURE)
    );
}
