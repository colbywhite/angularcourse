import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LikesModule} from './likes/likes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LikesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
