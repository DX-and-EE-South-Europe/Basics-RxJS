import { DataPage } from '../interfaces/interfaces';
import { listOperators } from './operators/index';

export const operatorsPages: DataPage[] = [...listOperators];
