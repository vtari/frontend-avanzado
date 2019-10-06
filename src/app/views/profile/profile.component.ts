import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    imageURL: String;
    constructor() {
        this.imageURL = "../assets/img/profile.png";

    }

  ngOnInit() {
  }

}
