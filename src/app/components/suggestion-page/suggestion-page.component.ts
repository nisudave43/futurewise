import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';
@Component({
  selector: 'app-suggestion-page',
  templateUrl: './suggestion-page.component.html',
  styleUrls: ['./suggestion-page.component.css']
})
export class SuggestionPageComponent implements OnInit {

  clothImagesURL = [];
  userDetail;
  subscription : any;
  constructor(private _serviceObject: AuthenticationService) { }

  ngOnInit() {
    this.clothImagesURL = this._serviceObject.returnClothImagesURLS();
    this.userDetail = this._serviceObject.returnLoginUserDetails();
    // this.subscription = this._serviceObject.returnBookmarkEvent().subscribe(item => this.bookmarkCloth(item));
    this._serviceObject.removeBookmarkEvent.subscribe( value => {
      console.log("we are checking value here in subscription",value);
      this.clothImagesURL.forEach((data) =>{
        if(data['id'] == value['id']){
          data['isBookmarked'] = false;
        }
      })
    })
  }

  bookmarkCloth(clothObject){
    console.log("We have cloth object here",clothObject);
    this.clothImagesURL.forEach((data) =>{
      if(data['id'] == clothObject['id']){
        data['isBookmarked'] = !data['isBookmarked'];
      }
    })

    this._serviceObject.addUserBookmarkClothData(clothObject,this.userDetail['email']);
  }

  dislikeCloth(clothObject){
    this.clothImagesURL.forEach((data) =>{
      if(data['id'] == clothObject['id']){
        data['isDisliked'] = !data['isDisliked'];
      }
    })
  }


}
