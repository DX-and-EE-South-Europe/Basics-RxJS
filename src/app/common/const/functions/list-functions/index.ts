import { DataPage } from 'src/app/common/interfaces/interfaces';
import { combineLatestFunction } from './combineLatest';
import { concatFunction } from './concat';
import { forkJoinFunction } from './forkJoin';
import { mergeFunction } from './merge';

const listFunctions: DataPage[] = [
  concatFunction,
  mergeFunction,
  combineLatestFunction,
  forkJoinFunction
];
export { listFunctions };
