import { DataPage } from 'src/app/common/interfaces/interfaces';
import { interval } from 'rxjs';

const intervalOperator: DataPage = {
  name: 'interval',
  description:
    'Observable that emits an infinite ascended sequence of numbers every x time.' +
    '\nThe argument is the time in milliseconds between outputs.' +
    '\nIt is always asynchronous and starts by 0.',
  note: 'This operator never completes.',
  imgUrl: 'interval',
  demo: [
    {
      codeToExecute: () => interval(500),
      codeString: 'interval( 500 ).subscribe(console.log)',
      added: { label: 'none' }
    }
  ]
};

export { intervalOperator };
