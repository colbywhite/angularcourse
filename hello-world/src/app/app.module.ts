import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LikesModule} from './likes/likes.module';
import {AuthorsModule} from './authors/authors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthorsModule, LikesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
