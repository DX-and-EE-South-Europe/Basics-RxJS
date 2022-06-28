import { DataPage } from 'src/app/common/interfaces/interfaces';
import { of } from 'rxjs';

const ofOperator: DataPage = {
  name: 'of',
  description:
    'Observable that emits each argument synchronously.' +
    '\nWhen all the values are emitted, the observable completes.',
  note: "To emit each value of an array, you should use the 'spread' operator or 'from' operator (see in Operators>Creation>from).",
  imgUrl: 'of',
  demo: [
    {
      title: 'Common use',
      codeToExecute: () => of('a', 0, [1, 2, 3, 4, 5], { c: 3 }, false),
      codeString:
        'of(' +
        "\n\t'a'," +
        '\n\t0,' +
        '\n\t[1,2,3,4,5],' +
        '\n\t{c:3}' +
        '\n\tfalse' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'How to emit each argument of an array',
      codeToExecute: () => of(...[1, 2, 3, 4, 5]),
      codeString:
        'of(' + '\n\t...[1,2,3,4,5], \t//Use spread operator' + '\n).subscribe(console.log)',
      added: { label: 'none' }
    }
  ]
};

export { ofOperator };
