import { DataPage } from 'src/app/common/interfaces/interfaces';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';

const mergeMapOperator: DataPage = {
  name: 'mergeMap',
  description: '',
  imgUrl: '',
  demo: [
    {
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(500),
          filter(({ target }) => !!target.value),
          mergeMap(({ target }) => jss.getPost$(target.value))
        ),
      codeString:
        'const input$ = fromEvent(input, "change")' +
        '\n\ninput$.pipe(' +
        '\n\tdebounceTime(500)\t\t\t\t\t\t//emits only after 500ms without another emission' +
        '\n\tfilter(({ target }) => !!target.value)\t\t\t//not return empty values' +
        '\n\tmergeMap(({ target }) => jss.getPost$(target.value))\t//return subscription of new observable (get http)' +
        '\n).subscribe(console.log);',
      added: { label: 'input', number: 1, names: ['id'], typeInputs: ['number'] },
      needJsonServer: true
    }
  ]
};

export { mergeMapOperator };
