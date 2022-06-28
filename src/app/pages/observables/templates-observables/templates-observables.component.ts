import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-templates-observables',
  templateUrl: './templates-observables.component.html',
  styleUrls: ['./templates-observables.component.scss']
})
export class TemplatesObservablesComponent {
  @Input() templateName!: string;
}
