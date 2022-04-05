import { debounceTime, Observable } from 'rxjs';
import { AddedComponentVDLabelT } from './types';

export interface DataLink {
  name: string;
  isRelativeRoute: boolean;
  theme?: 'link-header';
}

export interface BaseNav {
  name: string;
  isSimple: boolean;
  labels: string[];
}

export interface ComplexNav {
  name: string;
  isSimple: boolean;
  labels: SubComplexNav[];
}

export interface SubComplexNav {
  name: string;
  isSimple: boolean;
  labels: BaseNav[] | string[];
}

export interface VisualDemo {
  codeToExecute$: Observable<unknown>;
  codeString: string;
  added: AddComponentVD;
  wait?: boolean;
}

export interface DataPage {
  name: string;
  description: string;
  imgUrl: string;
  demo: VisualDemo[];
}

export interface AddComponentVD {
  label: AddedComponentVDLabelT;
  number?: number;
}
