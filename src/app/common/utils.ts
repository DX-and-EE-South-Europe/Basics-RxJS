import { DataLink } from './interfaces';

export function createDataLinkArray(
  array: string[],
  isrelativeRoute = false
): DataLink[] {
  const route = isrelativeRoute ? '' : '/';
  return array.map((name) =>
    Object.create({
      name,
      router: `${route}${name.toLowerCase().replace(' ', '-')}`
    })
  );
}
