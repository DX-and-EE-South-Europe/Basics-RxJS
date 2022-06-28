import { asyncScheduler, from, merge, of } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const fromOperator: DataPage = {
  name: 'from',
  description:
    'Observable whose argument should be an array, promise or iterable.' +
    '\nIt emits each value sequentially and synchronously.' +
    '\nWhen all the values are emitted, the observable completes.',
  note: "To make it asynchronous, pass as a second argument 'asyncScheduler' from '/rxjs'.",
  imgUrl: 'from',
  demo: [
    {
      title: 'Argument: Array',
      codeToExecute: () => from([1, 2, 3, 4, 5]),
      codeString: 'from(' + '\n\t[1,2,3,4,5]' + '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Argument: String',
      codeToExecute: () => from('Hello!'),
      codeString: 'from(' + "\n\t'Hello!'" + '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Argument: Iterable',
      codeToExecute: () =>
        from(
          (function* () {
            for (let i = 0; i < 6; i++) {
              yield i;
            }
          })()
        ),
      codeString:
        'from(' +
        '\n\t//Execute function generator' +
        '\n\t(function* () {' +
        '\n\t\tfor (let i = 0; i < 6; i++) {' +
        '\n\t\t\tyield i;' +
        '\n\t\t}' +
        '\n\t})()' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'All Observables Synchronous',
      codeToExecute: () => merge(of('Init'), from([1, 2, 3, 4, 5]), of('End')),
      codeString:
        'merge(' +
        "\n\tof( 'Init' )," +
        '\n\tfrom( [1,2,3,4,5] ),' +
        "\n\tof( 'End' )" +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'From Asynchronous',
      codeToExecute: () => merge(of('Init'), from([1, 2, 3, 4, 5], asyncScheduler), of('End')),
      codeString:
        'merge(' +
        "\n\tof( 'Init' )," +
        '\n\tfrom( [1,2,3,4,5] , asyncScheduler ),' +
        "\n\tof( 'End' )" +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    }
  ]
};

export { fromOperator };
