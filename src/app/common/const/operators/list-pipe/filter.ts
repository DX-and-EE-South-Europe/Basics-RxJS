import { DataPage } from '../../../interfaces';
import { interval } from 'rxjs';
import { filter, take } from 'rxjs/operators';

const filterOperator: DataPage = {
  name: 'filter',
  description:
    "Filter the emissions of the observable.\nIf condition is true, it'll return the Observable emission; otherwise it wont return.",
  imgUrl: 'filter',
  demo: [
    {
      codeToExecute: () =>
        interval(500).pipe(
          filter((val) => val % 2 === 0),
          take(5)
        ),
      codeString: `interval(500)
        .pipe(
            filter((val) => val % 2 === 0),
            take(5)
        )
        .subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }
  ]
};

export { filterOperator };
