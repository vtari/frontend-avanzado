import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';


export enum UserActionTypes {
    UPDATE_PROFILE = '[User/Profile] Update Profile',
    GET_PROFILE = '[User/Profile] Get Profile',
    LOAD_USER = '[User] Load User',
    UPDATE_PROFILE_SUCCESS = '[User/Profile] Update Profile Success',
    UPDATE_PROFILE_FAILURE = '[User/Profile] Update Profile Failure',   
    GET_PROFILE_SUCCESS = '[User/Profile] Get Profile Success',
    GET_PROFILE_FAILURE = '[User/Profile] Get Profile Failure',
    LOAD_USER_SUCCESS = '[User] Load User Success',
    LOAD_USER_FAILURE = '[User] Load User Failure',

}
export class UpdateProfile implements Action {
    readonly type = UserActionTypes.UPDATE_PROFILE;
    constructor(public payload: User) { }
}

export class UpdateProfileSuccess implements Action {
    readonly type = UserActionTypes.UPDATE_PROFILE_SUCCESS;
    constructor(public payload: any) { }
}

export class UpdateProfileFailure implements Action {
    readonly type = UserActionTypes.UPDATE_PROFILE_FAILURE;
    constructor(public payload: any) { }
}

export class GetProfile implements Action {
    readonly type = UserActionTypes.GET_PROFILE;
}

export class GetProfileSuccess implements Action {
    readonly type = UserActionTypes.GET_PROFILE_SUCCESS;
    constructor(public payload: any) { }
}

export class GetProfileFailure implements Action {
    readonly type = UserActionTypes.GET_PROFILE_FAILURE;
    constructor(public payload: any) { }
}

export class LoadUser implements Action {
    readonly type = UserActionTypes.LOAD_USER;
    constructor(public payload: User) { }
}

export class LoadUserSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload: any) { }
}

export class LoadUserFailure implements Action {
    readonly type = UserActionTypes.LOAD_USER_FAILURE;
    constructor(public payload: any) { }
}




export type AllUsersActions =
    | UpdateProfile   
    | UpdateProfileSuccess
    | UpdateProfileFailure
    | GetProfile
    | GetProfileSuccess
    | GetProfileFailure
    | LoadUser
    | LoadUserSuccess
    | LoadUserFailure;
   
