import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { BaseNav, ComplexNav } from 'src/app/common/interfaces/interfaces';

@Component({
  selector: 'app-base-page-section',
  templateUrl: './base-page-section.component.html',
  styleUrls: ['./base-page-section.component.scss']
})
export class BasePageSectionComponent implements OnInit, OnDestroy {
  navPage!: BaseNav | ComplexNav;
  suscriptionRouteData!: Subscription;

  constructor(private _route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.suscriptionRouteData.unsubscribe();
  }
  ngOnInit(): void {
    this.suscriptionRouteData = this._route.data
      .pipe(
        take(1),
        tap((data) => {
          if ('navData' in data) this.navPage = data['navData'];
          else console.error(new Error('navData is not defined in routing component'));
        })
      )
      .subscribe();
  }
}
