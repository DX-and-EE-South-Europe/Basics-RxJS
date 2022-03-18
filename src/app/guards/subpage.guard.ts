import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { operatorsPages } from '../common/const/operators';
import { DataPage } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export default class SubpageGuard implements CanActivateChild {
  constructor(private _router: Router) {}
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const urlTree = this._router.parseUrl('/home');

    const path = state.url.match(/[\w]+/gi);
    let objPage!: DataPage[];
    if (path) {
      if (path.length == 1) return true;
      switch (path[0]) {
        case 'operators':
          objPage = operatorsPages;
          break;
      }
      const canActive = objPage.some(({ name }) => name === path[1]);

      return canActive ? true : urlTree;
    }
    return urlTree;
  }
}
