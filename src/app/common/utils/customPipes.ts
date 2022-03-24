import { NavigationEnd } from '@angular/router';
import { OperatorFunction, pipe } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';

export const catchUrlRouter = (): OperatorFunction<unknown, string | undefined> =>
  pipe(
    skipWhile((val) => !(val instanceof NavigationEnd)),
    map((val) => (val instanceof NavigationEnd ? val.url : undefined))
  );
