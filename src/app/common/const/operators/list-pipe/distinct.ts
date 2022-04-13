import { DataPage } from '../../../interfaces';
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const distinctOperator: DataPage = {
  name: 'distinct',
  description: '',
  imgUrl: 'distinct',
  demo: [
    {
      codeToExecute: () => from([0, 1, 1, 2, 1, 3, 3]).pipe(distinct((val) => val)),
      codeString: `from([0,1,1,2,1,3,3])
        .pipe(
          distinct((val) => val)
        )
        .subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }
  ]
};

export { distinctOperator };
