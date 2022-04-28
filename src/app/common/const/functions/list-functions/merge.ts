import { DataPage } from 'src/app/common/interfaces/interfaces';
import { map, merge } from 'rxjs';

const mergeFunction: DataPage = {
  name: 'merge',
  description: '',
  imgUrl: 'of',
  demo: [
    {
      codeToExecute: ({ obs }) =>
        merge(obs[0].pipe(map(() => 'Button A')), obs[1].pipe(map(() => 'Button B'))),
      codeString:
        'button1$ = fromEvent(buttonA, "click");' +
        '\nbutton2$ = fromEvent(buttonB, "click");' +
        '\n' +
        '\nmerge(' +
        '\n\tbutton1$.pipe(map(()=>"Button A"),' +
        '\n\tbutton2$.pipe(map(()=>"Button B")' +
        '\n)' +
        '\n.subscribe(console.log)',
      added: { label: 'button', number: 2, names: ['A', 'B'] }
    }
  ]
};

export { mergeFunction };
