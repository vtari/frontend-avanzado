import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    imageURL: String;
    user: String;
    id: any;
    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router) {
        this.imageURL = "../assets/img/profile.png";
        this.id = this.activatedRoute.snapshot.params.id;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }

  ngOnInit() {
    }

    private editPersonalData() {
        this.router.navigate(['/profile-personal-data-form/'+this.id]);
    }

    private editStudies(uid) {
        this.router.navigate(['/profile-academic-training-form/' + uid]);
    }

    private editIdioms(uid) {
        this.router.navigate(['/profile-academic-training-form/' + uid]);
    }
    

}
