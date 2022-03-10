import { Component } from '@angular/core';
import { DataLink } from 'src/app/common/interfaces';
import { createDataLinkArray } from 'src/app/common/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private listSectionsNames: string[] = [
    'Anatomy Observables',
    'Operators',
    'Functions',
    'Marble Testing',
    'Practical Examples'
  ];
  listSections!: DataLink[];
  constructor() {
    this.listSections = createDataLinkArray(this.listSectionsNames);
  }
}
