import { functionsPages } from '../const/functions/functions';
import { operatorsPages } from '../const/operators/operators';
import { DataPage } from '../interfaces/interfaces';

const selectFileDataPage = (path: string[]): boolean | DataPage[] => {
  let objPage!: DataPage[];
  if (path.length == 1) return true;
  switch (path[0]) {
    case '':
      return false;
    case 'operators':
      objPage = operatorsPages;
      break;
    case 'functions':
      objPage = functionsPages;
      break;
    default:
      console.error(`URL ERROR: no coincidences with ${path[0]}`);
  }
  return !!objPage ? objPage : false;
};

const matchUrl = (url: string): string[] => {
  const path = url.match(/[\w-]+/gi);
  return !!path ? path : [''];
};

const replacePath = (path: string): string => path.replace(/-/gm, '');

export const existDataPage = (url: string): boolean => {
  const path = matchUrl(url);
  const objPage: DataPage[] | boolean = selectFileDataPage(path);

  return typeof objPage === 'boolean'
    ? objPage
    : objPage.some(({ name }) => name.toLowerCase() === replacePath(path[1]));
};

export const exportDataPage = (url: string): DataPage | null => {
  const path = matchUrl(url);
  const objPage: DataPage[] | boolean = selectFileDataPage(path);
  if (typeof objPage === 'object') {
    const dataPage = objPage.find(
      ({ name }) => name.toLowerCase() === replacePath(path[1])
    ) as DataPage;
    if (!dataPage) {
      console.error(
        `No coincidences to find 'name': '${path[1]}' in object with data of ${path[0]}`
      );
    }
    return dataPage as DataPage;
  }
  return null;
};
