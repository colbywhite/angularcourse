import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Chance} from 'chance';

import {LikesComponent} from './likes.component';
import {LikesModule} from './likes.module';

describe('LikesComponent', () => {
  let fixture: ComponentFixture<LikesComponent>;
  let app: LikesComponent;
  let initialCount: number;
  let elements: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LikesModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesComponent);
    app = fixture.debugElement.componentInstance;
    initialCount = new Chance().natural({min: 0, max: 100});
    app.count = initialCount;
    elements = {
      likesButton: (): HTMLButtonElement => fixture.nativeElement.querySelector('button'),
      likesParagraph: (): HTMLParagraphElement => fixture.nativeElement.querySelector('p.likes'),
      selectedParagraph: (): HTMLParagraphElement => fixture.nativeElement.querySelector('p.selected')
    }
  });

  describe('when not selected', () => {
    beforeEach(() => {
      app.isSelected = false;
      fixture.detectChanges();
    });

    it('should show 👎', () => {
      expect(elements.selectedParagraph().textContent).toContain('👎');
    });

    it('should increment the count when clicked', () => {
      elements.likesButton().click();
      fixture.detectChanges();
      expect(elements.likesParagraph().textContent).toContain(initialCount + 1);
    });

    it('should show 👍 when clicked', () => {
      elements.likesButton().click();
      fixture.detectChanges();
      expect(elements.selectedParagraph().textContent).toContain('👍');
    });
  });

  describe('when selected', () => {
    beforeEach(() => {
      app.isSelected = true;
      fixture.detectChanges();
    });

    it('should show 👍', () => {
      expect(elements.selectedParagraph().textContent).toContain('👍');
    });

    it('should decrement the count when clicked', () => {
      elements.likesButton().click();
      fixture.detectChanges();
      expect(elements.likesParagraph().textContent).toContain(initialCount - 1);
    });

    it('should show 👎 when clicked', () => {
      elements.likesButton().click();
      fixture.detectChanges();
      expect(elements.selectedParagraph().textContent).toContain('👎');
    });
  });
});
