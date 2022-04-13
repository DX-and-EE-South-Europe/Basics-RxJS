import { Observable } from 'rxjs';
import { AddedComponentVDLabelT } from './types';

interface DataLink {
  name: string;
  isRelativeRoute: boolean;
  theme?: 'link-header';
}

interface BaseNav {
  name: string;
  isSimple: boolean;
  labels: string[];
}

interface ComplexNav {
  name: string;
  isSimple: boolean;
  labels: SubComplexNav[];
}

interface SubComplexNav {
  name: string;
  isSimple: boolean;
  labels: BaseNav[] | string[];
}

interface VisualDemo {
  codeToExecute: (o?: any) => Observable<unknown>;
  codeString: string;
  added: AddComponentVD;
  wait?: boolean;
}

interface DataPage {
  name: string;
  description: string;
  imgUrl: string;
  demo: VisualDemo[];
}

interface AddComponentVD {
  label: AddedComponentVDLabelT;
  number?: number;
  names?: string[];
  event?: string;
}

export { DataLink, BaseNav, ComplexNav, SubComplexNav, VisualDemo, DataPage, AddComponentVD };
