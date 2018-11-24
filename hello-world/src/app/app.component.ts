import { Component } from '@angular/core';
import { Chance } from 'chance';

@Component({
  selector: 'app-root',
  template: `
    <app-authors></app-authors>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public initialCount: number = new Chance().natural({min: 0, max: 100});
}
