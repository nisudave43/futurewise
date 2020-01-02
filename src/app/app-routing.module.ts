import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkPageComponent } from './components/bookmark-page/bookmark-page.component';
import { SuggestionPageComponent } from './components/suggestion-page/suggestion-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'loginPage', component: LoginPageComponent },
  { path: 'suggestionPage/:email', component: SuggestionPageComponent },
  { path: 'bookmarkPage', component: BookmarkPageComponent },
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
