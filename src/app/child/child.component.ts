import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  template: `
    <h2>Student</h2>
  `
})
export class ChildComponent implements OnInit {
  constructor(private readonly interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService.teacherMessage$.subscribe(message => {
      switch (message) {
        case 'Good Morning, Children!':
          alert('Good Morning, Teacher!');
          break;
        case 'Well Done!':
          alert('Thank You, Teacher!');
          break;
        default:
          break;
      }
    });
  }
}
