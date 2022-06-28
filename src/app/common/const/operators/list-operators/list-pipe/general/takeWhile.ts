import { from, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const takeWhileOperator: DataPage = {
  name: 'takeWhile',
  description:
    'It emits the values while the condition is true.' +
    '\nWhen the condition is false, it completes the observable and it does not emit new values anymore regardless of the next value emitted by the original observable.',
  note: 'You can add a boolean as an optional second argument to indicate if it has to emit the value that makes the condition returned false. By default is false.',
  imgUrl: 'takeWhile',
  demo: [
    {
      title: 'Default behavior: Take while values minus 5',
      codeToExecute: () => interval(700).pipe(takeWhile((val: number) => val < 5)),
      codeString:
        'interval( 700 ).pipe(' +
        '\n\ttakeWhile( (val: number) => val < 5 )\t//emit while value minus 5' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Second argument: Take while even values and first odd value',
      codeToExecute: () =>
        from([0, 2, 4, 6, 7, 8, 10]).pipe(takeWhile((val: number) => val % 2 === 0, true)),
      codeString:
        'from( [0, 2, 4, 6, 7, 8, 10] ).pipe(' +
        '\n\ttakeWhile( (val: number) => val % 2 === 0, true)\t//emit while even number and first odd number' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    }
  ]
};

export { takeWhileOperator };
