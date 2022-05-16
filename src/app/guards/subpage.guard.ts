import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { existDataPage } from '../common/utils/selectDataPage';

@Injectable({
  providedIn: 'root'
})
export default class SubpageGuard implements CanActivateChild {
  constructor(private _router: Router) {}
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const urlTree = this._router.parseUrl('/home');

    return existDataPage(state.url) ? true : urlTree;
  }
}
