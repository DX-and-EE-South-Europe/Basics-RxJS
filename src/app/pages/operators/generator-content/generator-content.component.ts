import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces';
import { catchUrlRouter } from 'src/app/common/utils/customPipes';
import { exportDataPage } from 'src/app/common/utils/selectDataPage';

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
      if (!!url) this.dataPage = exportDataPage(url) as DataPage;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionRouter.unsubscribe();
  }
}
