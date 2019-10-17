import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private id: any;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.id = this.activatedRoute.snapshot.params.id;
    }

  ngOnInit() {
  }

    gotoProfile(idUser: any) {
        this.router.navigate(['/profile/', idUser]);
    }

    gotoOffers(idUser: any) {
        this.router.navigate(['/offers/', idUser]);
    }
}
