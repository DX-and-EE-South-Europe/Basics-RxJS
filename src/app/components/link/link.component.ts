import { Component, Input } from '@angular/core';
import { DataLink } from 'src/app/common/interfaces';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() dataLink!: DataLink;
  @Input() hover = false;
}
