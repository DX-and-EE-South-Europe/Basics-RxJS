import { DataPage } from '../../../interfaces/interfaces';
import { debounceTime, filter, map, mergeAll, tap } from 'rxjs/operators';

const debounceTimeOperator: DataPage = {
  name: 'debounceTime',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    {
      title: 'Simple example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(600),
          map(({ target }) => target.value)
        ),
      codeString:
        'const input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tdebounceTime(600)\t\t\t//emits only after 600ms without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', number: 1 }
    },
    {
      title: 'With http call',
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(500),
          filter(({ target }) => !!target.value),
          map(({ target }) => jss.getPost$(target.value)),
          mergeAll()
        ),
      codeString:
        'const input$ = fromEvent(input, "change")' +
        '\n\ninput$.pipe(' +
        '\n\tdebounceTime(500)\t\t\t\t\t\t//emits only after 500ms without another emission' +
        '\n\tfilter(({ target }) => !!target.value)\t\t\t//not return empty values' +
        '\n\tmap(({ target }) => jss.getPost$(target.value))\t//return new observable (get http)' +
        '\n\tmergeAll()\t\t\t\t\t\t\t\t//susbcribe to new emitted observable' +
        '\n).subscribe(console.log);',
      added: { label: 'input', number: 1, names: ['id'], typeInputs: ['number'] },
      needJsonServer: true
    }
  ]
};

export { debounceTimeOperator };
