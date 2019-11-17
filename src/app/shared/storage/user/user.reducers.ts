import { AllUsersActions, UserActionTypes } from './user.actions';
import { User } from '../../models/user.model';


/*
export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId,
    sortComparer: sortByName,
});
*/

export type State = User;

const initialState: State = null;


/*
const userReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}*/

export function reducer(state = initialState, action: AllUsersActions): State {
    switch (action.type) {
        case UserActionTypes.UPDATE_PROFILE: {
            return action.payload;
        }
        case UserActionTypes.GET_PROFILE: {
            return state;
        }
        case UserActionTypes.LOAD_USER: {
            return action.payload;
        }
        case UserActionTypes.UPDATE_PROFILE_FAILURE: {
            return state;
        }
        case UserActionTypes.GET_PROFILE_FAILURE: {
            return state;
        }
        case UserActionTypes.LOAD_USER_FAILURE: {
            return state;
        }
              

        default: {
            return state;
        }
    }
}





