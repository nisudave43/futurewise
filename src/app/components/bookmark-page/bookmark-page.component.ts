import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';


@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.css']
})
export class BookmarkPageComponent implements OnInit {

  constructor( private _userService : AuthenticationService) { }
  userBookmarkClothData = [];
  userDetail;
  ngOnInit() {
    this.userBookmarkClothData = this._userService.returnUserBookmarkClothData();
    this.userDetail = this._userService.returnLoginUserDetails();
  }

 removeBookmarkCloth(clothObject){
  this._userService.removeBookmarkCloth(clothObject);
  this.userBookmarkClothData = this._userService.returnUserBookmarkClothData();
 }
 
}
