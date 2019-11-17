import { AllOffersActions, OfferActionTypes } from './offers.actions';
import { Offer } from '../../models/offer.model';


/*
export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId,
    sortComparer: sortByName,
});
*/

export type State = {}

const initialState: State = [];


/*
const offerReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
    return offerReducer(state, action);
}
*/
export function reducer(state = initialState, action: AllOffersActions): State {
    switch (action.type) {
        case OfferActionTypes.GET_OFFERS: {
            return action.payload;
        }

        case OfferActionTypes.SUSCRIBE: {
            return action.payload;
        }

        case OfferActionTypes.UNSUSCRIBE: {
            return action.payload;
        }

        

        default: {
            return state;
        }
    }
}





