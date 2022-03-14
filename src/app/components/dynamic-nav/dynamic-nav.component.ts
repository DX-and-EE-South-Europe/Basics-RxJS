import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-nav',
  templateUrl: './dynamic-nav.component.html',
  styleUrls: ['./dynamic-nav.component.scss']
})
export class DynamicNavComponent {
  @Input() navLabels!: any;

  /* formatter(originLabel: string[] | SubComplexNav[]): any[] {
    if (originLabel.length > 0) {
      if (originLabel[0] instanceof Object) {
        if (!this.isComplexNav) this.isComplexNav = true;
        return (originLabel as SubComplexNav[]).map(({ labels }) =>
          this.formatter(labels)
        );
      } else {
        return createDataLinkArray(originLabel as string[], true);
      }
    }
    return [];
  } */
}
