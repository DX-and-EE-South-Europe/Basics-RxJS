import { DataPage } from 'src/app/common/interfaces/interfaces';
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const distinctOperator: DataPage = {
  name: 'distinct',
  description: '',
  imgUrl: 'distinct',
  demo: [
    {
      codeToExecute: () => from([0, 1, 1, 2, 1, 3, 3]).pipe(distinct((val) => val)),
      codeString:
        'from([0,1,1,2,1,3,3]).pipe(' +
        '\n\tdistinct((val) => val)\t//emit only new values not emitted yet' +
        '\n).subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { distinctOperator };