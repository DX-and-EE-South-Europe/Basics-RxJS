import { DataPage } from 'src/app/common/interfaces/interfaces';
import { ofOperator } from './list-create/of';
import { debounceTimeOperator } from './list-pipe/general/debounceTime';
import { distinctOperator } from './list-pipe/general/distinct';
import { distinctUntilChangedOperator } from './list-pipe/general/distinctUntilChanged';
import { filterOperator } from './list-pipe/general/filter';
import { mapOperator } from './list-pipe/general/map';
import { tapOperator } from './list-pipe/general/tap';
import { mergeMapOperator } from './list-pipe/hoo/mergeMap';

const listOperators: DataPage[] = [
  mapOperator,
  filterOperator,
  tapOperator,
  debounceTimeOperator,
  distinctOperator,
  distinctUntilChangedOperator,
  ofOperator,
  mergeMapOperator
];
export { listOperators };
