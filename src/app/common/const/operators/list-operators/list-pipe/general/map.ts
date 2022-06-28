import { DataPage } from 'src/app/common/interfaces/interfaces';
import { interval, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

const mapOperator: DataPage = {
  name: 'map',
  description:
    'To extract or transform the value emitted by the observable.' +
    '\nAlso, it can emit a new data even a new observable (see High-Order Observables).' +
    '\nIt completes when original observable completes.',
  imgUrl: 'map',
  demo: [
    {
      title: 'Transform output',
      codeToExecute: () =>
        interval(500).pipe(
          take(10),
          map((val) => val * 3)
        ),
      codeString:
        'interval( 500 ).pipe(' +
        '\n\ttake( 10 ),\t\t\t\t//emit first 20 values and complete' +
        '\n\tmap( (val) => val * 3 )\t//emitted value to value*3' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'New data',
      codeToExecute: () => of('hello').pipe(map(() => 'bye')),
      codeString:
        "of( 'hello' ).pipe(" +
        "\n\tmap( () => 'bye' ),\t//change output to 'bye'" +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Extract data',
      codeToExecute: ({ obs }) => obs[0].pipe(map(({ target }) => target.value)),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('input-1')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tmap( ({ target }) => target.value )\t//returns evt.target.value' +
        '\n).subscribe(console.log)',
      added: { label: 'input', namesInputs: [], numberInputs: 1 }
    }
  ]
};

export { mapOperator };
