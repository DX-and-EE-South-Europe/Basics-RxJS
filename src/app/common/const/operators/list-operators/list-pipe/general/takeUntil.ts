import { interval } from 'rxjs';
import { debounceTime, filter, map, reduce, takeUntil } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const takeUntilOperator: DataPage = {
  name: 'takeUntil',
  description:
    'It emits all the values emitted by the observable  to which is subscribed until the operator receives an emission from the indicated observable as an argument.' +
    "When takeUntil observable emits once, takeUntil completes the original observable's subscription.",
  imgUrl: 'takeUntil',
  demo: [
    {
      title: "Emit numbers until click on button 'Finish'",
      codeToExecute: ({ obs }) => interval(500).pipe(takeUntil(obs[0])),
      codeString:
        'const click$ = fromEvent(' +
        "\n\tdocument.getElementById('Finish')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\ninterval( 500 ).pipe(' +
        '\n\ttakeUntil( click$ )\t//complete when click$ emits' +
        '\n).subscribe(console.log)',
      added: { label: 'button', namesButtons: ['Finish'], numberButtons: 1 }
    },
    {
      title: 'Sum many values',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          takeUntil(obs[1]),
          debounceTime(600),
          map(({ target }) => Number(target.value)),
          filter((val) => val !== 0),
          reduce(
            (acc, cur: number) => {
              acc.numbers.push(cur);
              const total = acc.total + cur;
              return { ...acc, total: total };
            },
            { total: 0, numbers: [] as number[] }
          ),
          map((result: SumValuesI) => `${result.numbers.join(' + ')}= ${result.total}`)
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('Amount')," +
        "\n\t'change'" +
        '\n);' +
        '\nconst click$ = fromEvent(' +
        "\n\tdocument.getElementById('Calculate')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\ttakeUntil( click$ ),\t\t\t\t\t\t//complete when click$ emits' +
        '\n\tdebounceTime(600),\t\t\t\t\t//emit only after 600 milliseconds without new emissions' +
        '\n\tmap(({ target }) => Number(target.value)), \t//emit input value as a number' +
        '\n\tfilter((val) => val !== 0),\t\t\t\t//not emit when value equal 0' +
        '\n\treduce(\t\t\t\t\t\t\t\t//emit when complete and update state' +
        '\n\t\t( acc, cur: number ) => {\t\t\t//state includes list numbers and total sum' +
        '\n\t\t\tacc.numbers.push(cur);' +
        '\n\t\t\tconst total = acc.total + cur;' +
        '\n\t\t\treturn { ...acc, total: total };' +
        '\n\t\t},' +
        '\n\t\t{ total: 0, numbers: [] as number[] }' +
        '\n\t),' +
        '\n\tmap( (result: SumValuesI) => \t\t\t//emit sum operation' +
        "\n\t\t`${result.numbers.join(' + ')}= ${result.total}`" +
        '\n\t)' +
        '\n).subscribe(console.log)',
      added: {
        label: 'mix',
        namesButtons: ['Calculate'],
        namesInputs: ['Amount'],
        numberButtons: 1,
        numberInputs: 1,
        typeInputs: ['number']
      }
    }
  ]
};

interface SumValuesI {
  total: number;
  numbers: number[];
}

export { takeUntilOperator };
