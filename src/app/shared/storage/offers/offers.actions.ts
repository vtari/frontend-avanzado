import { Action } from '@ngrx/store';
import { Offer } from '../../models/offer.model';


export enum OfferActionTypes {
    GET_OFFERS = '[Offers] Get My Offers',
    GET_OFFERS_SUCCESS = "[Offers] Get Offers Success",
    GET_OFFERS_FAILURE = "[Offers] Get Offers Failure",
    SUSCRIBE = "[My Offers] Suscribe",
    SUSCRIBE_SUCCESS = "[Offers] Suscribe Success",
    SUSCRIBE_FAILURE = "[Offers] Suscribe Failures",
    UNSUSCRIBE = "[My Offers] Unsuscribe",
    UNSUSCRIBE_SUCCESS = "[My Offers] Unsuscribe Success",
    UNSUSCRIBE_FAILURE = "[My Offers] Unsuscribe Failures",
    
}

export class GetOffers implements Action {
    readonly type = OfferActionTypes.GET_OFFERS;
    constructor(public payload: any) { }
}

export class GetOffersSuccess implements Action {
    readonly type = OfferActionTypes.GET_OFFERS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetOffersFailure implements Action {
    readonly type = OfferActionTypes.GET_OFFERS_FAILURE;
    constructor(public payload: any) { }
}
export class Suscribe implements Action {
    readonly type = OfferActionTypes.SUSCRIBE;
    constructor(public payload: Offer[]) { }
}

export class SuscribeSuccess implements Action {
    readonly type = OfferActionTypes.SUSCRIBE_SUCCESS;
    constructor(public payload: any) { }
}

export class SuscribeFailure implements Action {
    readonly type = OfferActionTypes.SUSCRIBE_FAILURE;
    constructor(public payload: any) { }
}

export class Unsuscribe implements Action {
    readonly type = OfferActionTypes.UNSUSCRIBE;
    constructor(public payload: Offer[]) { }
}

export class UnsuscribeSuccess implements Action {
    readonly type = OfferActionTypes.UNSUSCRIBE_SUCCESS;
    constructor(public payload: any) { }
}

export class UnSuscribeFailure implements Action {
    readonly type = OfferActionTypes.UNSUSCRIBE_FAILURE;
    constructor(public payload: any) { }
}




export type AllOffersActions =
    | GetOffers
    | GetOffersSuccess
    | GetOffersFailure
    | Suscribe
    | SuscribeSuccess
    | SuscribeFailure
    | Unsuscribe
    | UnsuscribeSuccess
    | UnSuscribeFailure;
