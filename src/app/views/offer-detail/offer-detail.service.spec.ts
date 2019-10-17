import { TestBed } from '@angular/core/testing';

import { OfferDetailService } from './offer-detail.service';

describe('OfferDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferDetailService = TestBed.get(OfferDetailService);
    expect(service).toBeTruthy();
  });
});
