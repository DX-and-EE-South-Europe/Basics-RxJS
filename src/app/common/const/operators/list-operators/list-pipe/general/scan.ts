import { interval } from 'rxjs';
import { debounceTime, filter, map, scan, take } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const scanOperator: DataPage = {
  name: 'scan',
  description:
    'To wrap and manage states using an accumulator.' +
    '\n-First argument should specify how to update the state.' +
    '\n\t-> acc: state.' +
    '\n\t-> cur: new emitted value.' +
    '\n-Second argument argument should be the initial state.' +
    '\nIt emits the new state in each emission and completes when original observable completes.',
  imgUrl: 'scan',
  demo: [
    {
      title: 'Sum',
      codeToExecute: () =>
        interval(1000).pipe(
          take(10),
          scan((acc, cur) => acc + cur, 0)
        ),
      codeString:
        'interval( 1000 ).pipe(' +
        '\n\ttake( 10 ),\t\t\t\t\t//emit first 10 values and complete' +
        '\n\tscan( (acc,cur) => acc + cur, 0 ) )\t//sum of emitted values and emit it' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Shopping list',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(1000),
          map(({ target }) => target.value),
          filter((val) => !!val),
          scan((acc, cur: string) => {
            acc.push(cur);
            return acc;
          }, [] as string[])
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('New Item')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tdebounceTime( 1000 ),\t\t\t//emit only after 1seg without new emissions' +
        '\n\tmap( ({ target }) => target.value ),\t//emit evt.target.value' +
        '\n\tfilter( (val) => !!val ),\t\t\t//not emit empty values' +
        '\n\tscan((acc, cur: string) => {\t\t//add new emitted value to array list and emit it' +
        '\n\t\tacc.push(cur);' +
        '\n\t\treturn acc;' +
        '\n\t}, [] as string[])' +
        '\n).subscribe(console.log)',
      added: { label: 'input', namesInputs: ['New item'], numberInputs: 1 }
    }
  ]
};

export { scanOperator };
