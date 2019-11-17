import { AuthActionTypes, All } from './auth.actions';
import { User } from '../../models/user.model';

export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    //User
    user: string | null;
    // error message
    errorMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.email,                    
                isAuthenticated: true,               
                errorMessage: null
            };
        }

        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        case AuthActionTypes.GET_STATUS: {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}
