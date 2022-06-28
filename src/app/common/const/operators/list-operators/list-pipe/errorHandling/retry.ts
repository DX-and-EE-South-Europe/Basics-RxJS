import { concat, interval, of, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const retryOperator: DataPage = {
  name: 'retry',
  description:
    'If there is an error, restart the suscription of the observable.' +
    '\nWhen number of error thrown is greater than the number specified in the operator, it throws the error.',
  imgUrl: 'retry',
  demo: [
    {
      title: 'Error when number greater than 3',
      codeToExecute: () =>
        concat(
          of('Start Observable'),
          interval(500).pipe(mergeMap((x) => (x > 3 ? throwError(() => 'Number > 3') : of(x))))
        ).pipe(
          retry(2),
          catchError(() => of('Number of attemps excceded'))
        ),
      codeString:
        'concat(' +
        "\n\tof( 'Start Observable' )," +
        '\n\tinterval( 500 ).pipe(' +
        '\n\t\t//if number greater than 3 throw an error, else emit the number' +
        "\n\t\tmergeMap( (x) => (x > 3 ? throwError(() => 'Number > 3') : of(x))" +
        '\n\t)' +
        '\n).pipe(' +
        '\n\t//error retries 2' +
        '\n\tretry(2),' +
        '\n\t//if error, emit this message as last emitted value' +
        '\n\tcatchError(() =>' +
        "\n\t\tof( 'Number of attemps excedded' )" +
        '\n\t)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'none' }
    }
  ]
};

export { retryOperator };
