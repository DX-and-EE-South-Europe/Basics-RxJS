import { DataPage } from 'src/app/common/interfaces/interfaces';
import { createObsAnatomy } from './creating-obs';
import { executingAnatomy } from './executing';
import { disposingAnatomy } from './disposing';
import { subscribingAnatomy } from './subscribing';

const listAnatomy: DataPage[] = [
  createObsAnatomy,
  subscribingAnatomy,
  executingAnatomy,
  disposingAnatomy
];

export { listAnatomy };
