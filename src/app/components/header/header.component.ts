import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';
import { Router } from '@angular/router';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _serviceObject: AuthenticationService, private socialAuthService: AuthService,private _router: Router) { }
  userdetails;
  ngOnInit() {
    this.getLoginUserDetails();
  }

  getLoginUserDetails() {
    this.userdetails = this._serviceObject.returnLoginUserDetails();
  }


  logout() {
    this.socialAuthService.signOut().then(() => {
      console.log("Logout")
      this._router.navigate(['/loginPage']);
    });
  }
}
