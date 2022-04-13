import { DataPage } from '../../../interfaces';
import { of } from 'rxjs';

const ofOperator: DataPage = {
  name: 'of',
  description: 'Observable that emits the values synchronously and completes.',
  imgUrl: 'of',
  demo: [
    {
      codeToExecute: () => of('a', 0, [1, 2, 3, 4, 5], { c: 3 }),
      codeString: `of(
        'a',
        0,
        [1,2,3,4,5], 
        {c:3}
      ).subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }
  ]
};

export { ofOperator };
