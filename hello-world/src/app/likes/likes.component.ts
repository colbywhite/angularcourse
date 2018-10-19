import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-likes',
  template: `
    <button (click)="like()">Like</button>
    <p class="likes">Total Likes: {{count}}</p>
    <p class="selected">Selected: {{isSelected ? '👍' : '👎'}}</p>
  `
})
export class LikesComponent {
  @Input()
  public count: number;

  public isSelected = false;

  public like(): void {
    this.count += (this.isSelected) ? -1 : 1;
    this.isSelected = !this.isSelected;
  }
}
