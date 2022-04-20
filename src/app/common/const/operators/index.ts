import { DataPage } from 'src/app/common/interfaces/interfaces';
import { mapOperator } from './list-pipe/map';
import { filterOperator } from './list-pipe/filter';
import { tapOperator } from './list-pipe/tap';
import { debounceTimeOperator } from './list-pipe/debounceTime';
import { distinctOperator } from './list-pipe/distinct';
import { distinctUntilChangedOperator } from './list-pipe/distinctUntilChanged';
import { ofOperator } from './list-create/of';

const listOperators: DataPage[] = [
  mapOperator,
  filterOperator,
  tapOperator,
  debounceTimeOperator,
  distinctOperator,
  distinctUntilChangedOperator,
  ofOperator
];
export { listOperators };
