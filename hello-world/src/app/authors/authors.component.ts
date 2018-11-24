import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Author, AuthorsService} from '../authors.service';

@Component({
  selector: 'app-authors',
  template: `
    <h2>{{(authors | async).length}} Authors</h2>
    <ul>
      <li *ngFor="let author of (authors | async)">{{author.name}}</li>
    </ul>
  `
})
export class AuthorsComponent implements OnInit {
  public authors: Observable<Author[]>;

  constructor(private authorsService: AuthorsService) {
  }

  public ngOnInit() {
    this.authors = this.authorsService.authors;
  }

}
