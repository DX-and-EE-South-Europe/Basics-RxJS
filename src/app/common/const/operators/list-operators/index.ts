import { DataPage } from 'src/app/common/interfaces/interfaces';
import { fromOperator } from './list-create/from';
import { fromEventOperator } from './list-create/fromEvent';
import { intervalOperator } from './list-create/interval';
import { ofOperator } from './list-create/of';
import { catchErrorOperator } from './list-pipe/errorHandling/catchError';
import { retryOperator } from './list-pipe/errorHandling/retry';
import { debounceTimeOperator } from './list-pipe/general/debounceTime';
import { delayOperator } from './list-pipe/general/delay';
import { distinctOperator } from './list-pipe/general/distinct';
import { distinctUntilChangedOperator } from './list-pipe/general/distinctUntilChanged';
import { filterOperator } from './list-pipe/general/filter';
import { mapOperator } from './list-pipe/general/map';
import { scanOperator } from './list-pipe/general/scan';
import { startWithOperator } from './list-pipe/general/startWith';
import { takeOperator } from './list-pipe/general/take';
import { takeUntilOperator } from './list-pipe/general/takeUntil';
import { takeWhileOperator } from './list-pipe/general/takeWhile';
import { tapOperator } from './list-pipe/general/tap';
import { throttleTimeOperator } from './list-pipe/general/throttleTime';
import { concatMapOperator } from './list-pipe/hoo/concatMap';
import { exhaustMapOperator } from './list-pipe/hoo/exhaustMap';
import { mergeMapOperator } from './list-pipe/hoo/mergeMap';
import { switchMapOperator } from './list-pipe/hoo/switchMap';

const listOperators: DataPage[] = [
  ofOperator,
  fromOperator,
  fromEventOperator,
  intervalOperator,
  mapOperator,
  filterOperator,
  tapOperator,
  scanOperator,
  takeOperator,
  takeWhileOperator,
  takeUntilOperator,
  distinctOperator,
  distinctUntilChangedOperator,
  debounceTimeOperator,
  throttleTimeOperator,
  startWithOperator,
  delayOperator,
  concatMapOperator,
  mergeMapOperator,
  switchMapOperator,
  exhaustMapOperator,
  catchErrorOperator,
  retryOperator
];
export { listOperators };
