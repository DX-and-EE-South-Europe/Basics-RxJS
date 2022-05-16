import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-templates-anatomy',
  templateUrl: './templates-anatomy.component.html',
  styleUrls: ['./templates-anatomy.component.scss']
})
export class TemplatesAnatomyComponent {
  @Input() templateName!: string;
}
