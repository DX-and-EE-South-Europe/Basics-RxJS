import { DataPage } from 'src/app/common/interfaces/interfaces';
import { debounceTime, filter, map, mergeAll, tap } from 'rxjs/operators';

const debounceTimeOperator: DataPage = {
  name: 'debounceTime',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    {
      title: 'Simple examples',
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
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(600),
          map(() => new Date().toLocaleString())
        ),
      codeString:
        'const input$ = fromEvent(input, "change")' +
        '\n\ninput$.pipe(' +
        '\n\tdebounceTime(600)\t\t\t\t\t\t//emits only after 500ms without another emission' +
        '\n\tmap(() => new Date().toLocaleString())\t\t//return datetime of last click emitted' +
        '\n).subscribe(console.log);',
      added: { label: 'button', number: 1 },
      needJsonServer: true
    }
  ]
};

export { debounceTimeOperator };
