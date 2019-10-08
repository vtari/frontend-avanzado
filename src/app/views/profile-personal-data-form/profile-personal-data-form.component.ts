import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-profile-personal-data-form',
  templateUrl: './profile-personal-data-form.component.html',
  styleUrls: ['./profile-personal-data-form.component.scss']
})
export class ProfilePersonalDataFormComponent implements OnInit {
    imageURL: String;
    user: String;
    id: any;
    public Editor = ClassicEditor;

    constructor(private activatedRoute: ActivatedRoute,
        private toastService: ToastrService, private router: Router) {
        this.imageURL = "../assets/img/profile.png";
        this.id = this.activatedRoute.snapshot.params.id;
        this.user = JSON.parse(localStorage.getItem("currentUser"));
    }

  ngOnInit() {
  }

}
