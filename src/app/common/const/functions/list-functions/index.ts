import { DataPage } from 'src/app/common/interfaces/interfaces';
import { combineLatestFunction } from './combineLatest';
import { forkJoinFunction } from './forkJoin';
import { mergeFunction } from './merge';

const listFunctions: DataPage[] = [mergeFunction, combineLatestFunction, forkJoinFunction];
export { listFunctions };
