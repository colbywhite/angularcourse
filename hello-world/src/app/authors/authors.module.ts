import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorsComponent} from './authors.component';
import {AuthorsService} from '../authors.service';

@NgModule({
  imports: [CommonModule],
  exports: [AuthorsComponent],
  providers: [AuthorsService],
  declarations: [AuthorsComponent]
})
export class AuthorsModule {
}
