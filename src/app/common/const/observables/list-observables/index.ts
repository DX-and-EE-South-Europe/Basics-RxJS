import { DataPage } from 'src/app/common/interfaces/interfaces';
import { createObservables } from './creating-obs';
import { executingObservables } from './executing';
import { disposingObservables } from './disposing';
import { subscribingObservables } from './subscribing';

const listObservables: DataPage[] = [
  createObservables,
  subscribingObservables,
  executingObservables,
  disposingObservables
];

export { listObservables };
