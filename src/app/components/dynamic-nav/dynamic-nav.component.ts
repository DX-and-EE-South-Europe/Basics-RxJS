import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-nav',
  templateUrl: './dynamic-nav.component.html',
  styleUrls: ['./dynamic-nav.component.scss']
})
export class DynamicNavComponent {
  @Input() navLabels!: any;
}
