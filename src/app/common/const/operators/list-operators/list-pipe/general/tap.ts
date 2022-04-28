import { DataPage } from 'src/app/common/interfaces/interfaces';
import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

const tapOperator: DataPage = {
  name: 'tap',
  description: "To execute side-effects for notifications.\nIt doesn't change the Observable.",
  imgUrl: 'tap',
  demo: [
    {
      codeToExecute: () =>
        interval(500).pipe(
          take(3),
          tap((val) => alert(val))
        ),
      codeString:
        'interval(500).pipe(' +
        '\n\ttake(3),\t\t\t\t//take the first 3 values emitted' +
        '\n\ttap((val) => alert(val)),\t//alert side-effect' +
        '\n).subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { tapOperator };
