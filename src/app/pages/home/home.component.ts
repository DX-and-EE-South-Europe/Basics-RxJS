import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listSectionsNames: string[] = [
    'Anatomy Observables',
    'Operators',
    'Functions',
    'Marble Testing',
    'Practical Examples'
  ];
}
