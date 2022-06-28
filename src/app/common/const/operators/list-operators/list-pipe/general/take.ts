import { interval, map, reduce, take } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const takeOperator: DataPage = {
  name: 'take',
  description:
    'It emits the emitted values by the observable and completes when it emits x number of values.',
  imgUrl: 'take',
  demo: [
    {
      title: 'Emit 3 values',
      codeToExecute: () => interval(500).pipe(take(3)),
      codeString:
        'interval( 500 ).pipe(' +
        '\n\ttake( 3 ),\t\t\t\t//emit 3 first values and complete' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Time to emit 7 values',
      codeToExecute: () =>
        interval(300).pipe(
          take(7),
          reduce((acc) => acc + 0.3, 0),
          map((val) => `Time: ${Math.round(val * 100) / 100} seconds`)
        ),
      codeString:
        'interval( 300 ).pipe(' +
        '\n\ttake( 7 ),\t\t\t\t\t\t//emit 7 first values and complete' +
        '\n\treduce( (acc) => acc + 0.3 , 0 ),\t//sum time between emissions and return when complete' +
        '\n\tmap( (val) =>\t\t\t\t\t//emit rounded value' +
        '\n\t\t`Time: ${Math.round(val * 100) / 100} seconds` )' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    }
  ]
};

export { takeOperator };
