/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { catchUrlRouter } from 'src/app/common/utils/customPipes';

@Component({
  selector: 'app-dynamic-nav',
  templateUrl: './dynamic-nav.component.html',
  styleUrls: ['./dynamic-nav.component.scss']
})
export class DynamicNavComponent implements OnInit {
  @Input() navLabels!: any;
  @Input() url!: string;
  selectedLabel = '';
  complexLabel!: Array<Array<boolean[]>>;

  subscriptionRouter: Subscription;

  constructor(private _router: Router) {
    this.subscriptionRouter = this._router.events.pipe(catchUrlRouter()).subscribe((url) => {
      if (!!url) {
        const selectLabel = url.match(/[\w]+/gi);
        this.selectedLabel = !!selectLabel ? selectLabel[1] : '';
      }
    });
  }

  ngOnInit(): void {
    this.complexLabel = this.navLabels.labels.map((level1: any) => {
      if (typeof level1.labels[0] === 'string') {
        return [
          level1.labels.some((labelName: any) => labelName === this.selectedLabel) ? true : false
        ];
      }
      const findArray: boolean[] = level1.labels.map((labelName: any) =>
        labelName.labels.some((subLabelName: any) => subLabelName === this.selectedLabel)
      );
      return [findArray.some((x: boolean) => !!x), findArray];
    });
  }
}
