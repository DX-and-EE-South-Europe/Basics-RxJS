import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { operatorsPages } from 'src/app/common/const/operators';
import { DataPage } from 'src/app/common/interfaces';
import { catchUrlRouter } from 'src/app/common/utils/customPipes';

@Component({
  selector: 'app-generator-content',
  templateUrl: './generator-content.component.html',
  styleUrls: ['./generator-content.component.scss']
})
export class GeneratorContentComponent implements OnDestroy {
  dataPage!: DataPage;
  subscriptionRouter!: Subscription;

  constructor(private _router: Router) {
    this.subscriptionRouter = this._router.events.pipe(catchUrlRouter()).subscribe((url) => {
      if (!!url) this.loadDataPage(url);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionRouter.unsubscribe();
  }

  loadDataPage(url: string): void {
    const path = url.match(/[\w]+/gi);
    let objPage!: DataPage[];
    if (path) {
      switch (path[0]) {
        case 'operators':
          objPage = operatorsPages;
          break;
        default:
          console.error(`URL ERROR: no coincidences with ${path[0]}`);
      }
      if (objPage) {
        this.dataPage = objPage.find(({ name }) => name === path[1]) as DataPage;
        if (!this.dataPage)
          console.error(
            `No coincidences to find 'name': '${path[1]}' in object with data of ${path[0]}`
          );
      }
    }
  }
}
