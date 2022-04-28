import { DataPage } from 'src/app/common/interfaces/interfaces';
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
      codeString:
        'interval(500).pipe(' +
        '\n\tfilter((val) => val % 2 === 0),\t//return only odd number' +
        '\n\ttake(5)\t\t\t\t\t\t//take the first 5 values emitted' +
        '\n).subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { filterOperator };
