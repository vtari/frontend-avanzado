import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';
import { Offer } from '../../shared/models/offer.model';
import { ActivatedRoute } from '@angular/router';
import { OfferDetailService } from './offer-detail.service';
import { TitleStudy } from '../../shared/models/study.model';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
    //TODO poner el facke service y llamar a goDetail
    private offer: Offer;
    private titles: TitleStudy[];
    private id: any;
    constructor(private fackeService: FakeBackendService, private activatedRoute: ActivatedRoute,
        private offersService: OfferDetailService) {
        //Id de Oferta
        this.id = this.activatedRoute.snapshot.params.id;
        this.titles = [];
        this.setJobOffer(this.id);
        

    }

    private async setJobOffer(id) {
        this.offer = await this.offersService.getDetailJob(id);
        console.log("Esta es la compañis" + this.offer.company.name);
        for (var i = 0; i < this.offer.title.length; i++) {
            this.titles.push(this.offer.title[i]);
            console.log(this.titles[i]);


        }
    }

   
  ngOnInit() {
  }

}
