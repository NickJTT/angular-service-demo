import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Teacher</h1>
    <button (click)='greetStudent()'>Good Morning, Children!</button>
    <button (click)='appreciateStudent()'>Well Done!</button>
    <app-child></app-child>
  `
})
export class AppComponent {
  constructor(private readonly interactionService: InteractionService) {}

  public greetStudent() {
    this.interactionService.sendMessage('Good Morning, Children!');
  }

  public appreciateStudent() {
    this.interactionService.sendMessage('Well Done!');
  }
}
