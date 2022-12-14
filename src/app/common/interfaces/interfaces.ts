import { Observable } from 'rxjs';
import { AddedComponentVDLabelT, AddedInputT } from '../types';

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
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  codeToExecute: (o?: any) => Observable<unknown>;
  codeString: string;
  added: AddComponentVD;
  wait?: boolean;
  needJsonServer?: boolean;
}

interface DataPage {
  name: string;
  description?: string;
  note?: string;
  imgUrl?: string;
  demo: VisualDemo[];
}

interface AddComponentVD {
  label: AddedComponentVDLabelT;
  numberInputs?: number;
  numberButtons?: number;
  namesInputs?: string[];
  namesButtons?: string[];
  typeInputs?: AddedInputT[];
  event?: string;
}

export { DataLink, BaseNav, ComplexNav, SubComplexNav, VisualDemo, DataPage, AddComponentVD };
