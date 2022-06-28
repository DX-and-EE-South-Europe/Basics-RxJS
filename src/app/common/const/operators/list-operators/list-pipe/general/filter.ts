import { DataPage } from 'src/app/common/interfaces/interfaces';
import { interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const filterOperator: DataPage = {
  name: 'filter',
  description:
    'Filter the outputs of the observable.' +
    '\nIf condition is true, it emits the emitted value by the original observable. Otherwise it does not emit value.',
  imgUrl: 'filter',
  demo: [
    {
      title: 'Filter by even number',
      codeToExecute: () =>
        interval(500).pipe(
          take(5),
          filter((val) => val % 2 === 0)
        ),
      codeString:
        'interval(500).pipe(' +
        '\n\ttake( 5 ),\t\t\t\t\t\t//emit first 5 values and complete' +
        '\n\tfilter( (val) => val % 2 === 0 )\t//emit only even numbers' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Filter by strings lower than 5',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          map(({ target }) => target.value),
          filter((val) => (val as string).length < 5)
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('input-1')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tmap( ({ target }) => target.value ),\t//returns evt.target.value' +
        '\n\tfilter( (val) => val.length<5 0 )\t//emit string whose length is less than 5' +
        '\n).subscribe(console.log)',
      added: { label: 'input', namesInputs: [], numberInputs: 1 }
    }
  ]
};

export { filterOperator };
