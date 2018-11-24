import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Chance} from 'chance';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {AuthorsComponent} from './authors.component';
import {Author, AuthorsService} from '../authors.service';

const chance = new Chance();

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let authors: Author[];
  let elements: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      providers: [AuthorsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    const randAuthor = (): Author => {
      return {
        id: chance.integer(),
        name: chance.name()
      };
    };

    const authorsService = TestBed.get(AuthorsService);
    authors = chance.n(randAuthor, chance.integer({min: 1, max: 10}));
    spyOnProperty(authorsService, 'authors', 'get').and.returnValue(Observable.of(authors));
    fixture.detectChanges();
    elements = {
      listItems: (): NodeListOf<HTMLLIElement> => fixture.nativeElement.querySelectorAll('li')
    };
  });

  it('should display all authors', () => {
    fixture.whenStable().then(() => {
      expect(elements.listItems().length).toBe(authors.length);
    });
  });

  it('should display author names', () => {
    const items: HTMLLIElement[] = Array.prototype.slice.call(elements.listItems());
    const names = items.map((ele: HTMLLIElement) => ele.textContent.trim());
    const expectedNames = authors.map(a => a.name);
    expect(names).toEqual(expectedNames);
  });
});
