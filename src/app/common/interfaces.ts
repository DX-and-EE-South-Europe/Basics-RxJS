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
