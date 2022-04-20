import { Component, Input, OnInit } from '@angular/core';
import { DataLink } from 'src/app/common/interfaces/interfaces';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() dataLink!: DataLink;
  @Input() hover = false;
  @Input() addClass = '';

  route!: string;

  ngOnInit(): void {
    const routeAux = this.dataLink.isRelativeRoute ? '' : '/';
    this.route = `${routeAux}${this.dataLink.name
      .replace(/.{1}[A-Z ]/gm, this.transformRoute)
      .toLowerCase()}`;
  }

  transformRoute(arg: string): string {
    return arg[1].match(/\s/) ? arg[0] + '-' : arg[0] + '-' + arg[1];
  }
}
