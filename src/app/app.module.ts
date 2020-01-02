import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggestionPageComponent } from './components/suggestion-page/suggestion-page.component';
import { BookmarkPageComponent } from './components/bookmark-page/bookmark-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService} from './service/authentication.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { from } from 'rxjs';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("146641862628913")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("285653105812-3g5139prm1lj3iq95sqjtb3fsmu3pha5.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SuggestionPageComponent,
    BookmarkPageComponent,
    LoginPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    SocialLoginModule,
    AngularFontAwesomeModule
  ],
  providers: [ AuthenticationService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
