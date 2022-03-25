import { Component, Input } from '@angular/core';
import { VisualDemo } from 'src/app/common/interfaces';

@Component({
  selector: 'app-parent-visual-demo',
  templateUrl: './parent-visual-demo.component.html',
  styleUrls: ['./parent-visual-demo.component.scss']
})
export class ParentVisualDemoComponent {
  @Input() dataDemos!: VisualDemo[];
}
