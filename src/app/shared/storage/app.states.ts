import * as auth from './auth/auth.reducers';
import * as user from './user/user.reducers';
import * as offer from './offers/offers.reducers';

export interface AppState {
    authState: auth.State;
    userState: user.State;
    offerState: offer.State;
}

export const reducers = {
    auth: auth.reducer,
    user: user.reducer,
    offer: offer.reducer,
};
