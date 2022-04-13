import { DataPage } from '../../../interfaces';
import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

const tapOperator: DataPage = {
  name: 'tap',
  description: "To execute side-effects for notifications.\nIt doesn't change the Observable",
  imgUrl: 'tap',
  demo: [
    {
      codeToExecute: () =>
        interval(500).pipe(
          take(3),
          tap((val) => alert(val))
        ),
      codeString: `interval(500)
        .pipe(
          take(3),
          tap((val) => alert(val)),
        )
        .subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }
  ]
};

export { tapOperator };
