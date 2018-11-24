import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Author {
  id: number;
  name: string;
}

@Injectable()
export class AuthorsService {

  constructor() {
  }

  public get authors(): Observable<Author[]> {
    return Observable.of([
      {id: 1, name: 'author1'},
      {id: 2, name: 'author2'},
      {id: 3, name: 'author3'}
    ]);
  }

}
