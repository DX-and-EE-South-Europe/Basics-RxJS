import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-multicasted',
  templateUrl: './template-multicasted.component.html',
  styleUrls: ['./template-multicasted.component.scss']
})
export class TemplateMulticastedComponent {
  @Input() templateName!: string;
}
