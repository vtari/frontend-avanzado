import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { SigninService } from '../signin/signin.service';
import { OffersService } from './offers.service';
import { Offer } from '../../shared/models/offer.model';
import { Study, VocationalStudy } from '../../shared/models/study.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

    private id;
    private user: User;   
    private offers: Offer[];
    private ofertas: Offer[];
    private selectedOffers: Offer[];   
    constructor(private activatedRoute: ActivatedRoute, private signinService: SigninService,
        private offersService: OffersService, private router: Router) {
        //Id de usuario
        this.id = this.activatedRoute.snapshot.params.id;
        // usuario actual
        this.user = signinService.user;        
        // ofertas
        //this.setOffers();
        //console.log(this.offers[0].company.name);
        this.selectedOffers = [];
        // elimina del array de ofertas las que no se corresponden con el título del estudiante        
        this.getOffersFiltered();
    }

  ngOnInit() {
    }
    private async setOffers() {
       
       
    }

    private async getOffersFiltered() {      
        this.offers = await this.offersService.getOffers();
       
        for (var j = 0; j < this.offers.length; j++) {
           for (var i = 0; i < this.user.studies.length; i++) {
          
               if (this.offers[j].category.name.toUpperCase() === this.user.studies[i].category.name.toUpperCase()) {
                   if (!this.selectedOffers.includes(this.offers[j])) {
                       this.selectedOffers.push(this.offers[j]);
                   }                   
                }
            }     
                      
        }
    }

    private detalle(offer: Offer) {
        this.router.navigate(['/offer-detail/' + offer.id]);
    }

}
