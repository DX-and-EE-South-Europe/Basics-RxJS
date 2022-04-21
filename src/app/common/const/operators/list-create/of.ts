import { DataPage } from '../../../interfaces/interfaces';
import { of } from 'rxjs';

const ofOperator: DataPage = {
  name: 'of',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    {
      codeToExecute: () => of('a', 0, [1, 2, 3, 4, 5], { c: 3 }),
      codeString:
        'of(' +
        "\n\t'a'," +
        '\n\t0,' +
        '\n\t[1,2,3,4,5],' +
        '\n\t{c:3}' +
        '\n).subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { ofOperator };
