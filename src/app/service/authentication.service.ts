import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUserInformation;
  userBookmarkClothDetail = [];
  removeBookmarkEvent = new BehaviorSubject({});
  clothImagesURLS = [
    {
      "id": 1,
      "URL": '../../assets/images/pants1.jpg',
      "category": "pants",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 2,
      "URL": '../../assets/images/pants2.jpg',
      "category": "pants",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 3,
      "URL": '../../assets/images/pants3.jpg',
      "category": "pants",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 4,
      "URL": '../../assets/images/pants4.jpg',
      "category": "pants",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 5,
      "URL": '../../assets/images/shirt1.jpg',
      "category": "shirts",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 6,
      "URL": '../../assets/images/shirt2.jpg',
      "category": "shirts",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 7,
      "URL": '../../assets/images/shirt3.jpg',
      "category": "shirts",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 8,
      "URL": '../../assets/images/shirt4.jpg',
      "category": "shirts",
      "isBookmarked": false,
      "isDisliked": false
    },
    {
      "id": 9,
      "URL": '../../assets/images/shirt7.jpg',
      "category": "shirts",
      "isBookmarked": false,
      "isDisliked": false
    },
  ]
  constructor() { }

  setLoginUserDetails(userDetail) {
    this.loginUserInformation = userDetail;
    console.log("we have login user data", this.loginUserInformation)
  }

  returnLoginUserDetails() {
    return this.loginUserInformation;
  }


  returnClothImagesURLS() {
    return this.clothImagesURLS;
  }

  addUserBookmarkClothData(clothObject, email) {
    console.log("we have clothObject in service", clothObject);
    if (clothObject['isBookmarked']) {
      this.userBookmarkClothDetail.push(clothObject);

    } else {
      this.userBookmarkClothDetail = this.userBookmarkClothDetail.filter(function (data) {
        return data['id'] !== clothObject['id'];
      });
    }

    console.log("we have data object in service", this.userBookmarkClothDetail);
  }


  returnUserBookmarkClothData() {
    return this.userBookmarkClothDetail;
  }


  removeBookmarkCloth(clothObject) {
    this.removeBookmarkEvent.next(clothObject);
    this.userBookmarkClothDetail = this.userBookmarkClothDetail.filter(function (data) {
      return data['id'] !== clothObject['id'];
    });

    console.log("we have data object in service after remove", this.userBookmarkClothDetail);
  }


  returnBookmarkEvent() {
    return this.removeBookmarkEvent;
  }
}
