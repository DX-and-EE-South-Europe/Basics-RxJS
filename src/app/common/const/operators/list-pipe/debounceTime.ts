import { DataPage } from '../../../interfaces/interfaces';
import { debounceTime, map } from 'rxjs/operators';

const debounceTimeOperator: DataPage = {
  name: 'debounceTime',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    {
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(300),
          map(({ target }) => target.value)
        ),
      codeString:
        'const click$ = fromEvent(input, "change");\n\nclick$.pipe(\n\tdebounceTime(300)\n\t map(({ target }) => target.value)\n).subscribe(console.log);',
      added: { label: 'input', number: 1 },
      wait: false
    }
  ]
};

export { debounceTimeOperator };
