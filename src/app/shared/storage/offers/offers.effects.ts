import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { OfferActionTypes, GetOffersSuccess, GetOffersFailure, SuscribeSuccess, SuscribeFailure, Suscribe, UnsuscribeSuccess, UnSuscribeFailure } from './offers.actions';
import { OffersService } from '../../services/offers.service';



@Injectable()
export class OfferEffects {

    constructor(
        private actions$: Actions,
        private offerService: OffersService
    ) { }

  /*  @Effect()
    UpdateOffers = this.actions$.pipe(
        ofType(OfferActionTypes.UPDATE_OFFERS),
        mergeMap(({ offers }) =>
            this.offerService.offers({ offers }).pipe(
                map(() => new UpdateProfileSuccess({ offers })),
                catchError(() => of(new UpdateProfileFailure({ offers })))
            )
        )
    );*/
   

    @Effect()
    GetOffers = this.actions$.pipe(
        ofType(OfferActionTypes.GET_OFFERS),
        mergeMap(({ offers }) =>
            this.offerService.getOffers().pipe(
                map((offers) => new GetOffersSuccess({ offers })),
                catchError(() => of(new GetOffersFailure({ offers })))
            )
        )
    );
    @Effect()
    Suscribe = this.actions$.pipe(
        ofType(OfferActionTypes.SUSCRIBE),
        mergeMap(({ offers }) =>
            this.offerService.getOffers().pipe(
                map((offers) => new SuscribeSuccess({ offers })),
                catchError(() => of(new SuscribeFailure({ offers })))
            )
        )
    );

    @Effect()
    Unsuscribe = this.actions$.pipe(
        ofType(OfferActionTypes.UNSUSCRIBE),
        mergeMap(({ offers }) =>
            this.offerService.getOffers().pipe(
                map((offers) => new UnsuscribeSuccess({ offers })),
                catchError(() => of(new UnSuscribeFailure({ offers })))
            )
        )
    );

  

}
