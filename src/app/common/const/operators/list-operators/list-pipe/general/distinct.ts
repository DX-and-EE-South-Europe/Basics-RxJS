import { DataPage } from 'src/app/common/interfaces/interfaces';
import { from } from 'rxjs';
import { debounceTime, distinct, filter, map } from 'rxjs/operators';

const distinctOperator: DataPage = {
  name: 'distinct',
  description:
    'Emit only values that have not been emitted by the observable yet.' +
    '\nThe default comparator is: prev===cur.',
  note: 'In object case, you can use the keySelector to indicate the key on which to apply the comparator:\n\t - distinct( ({key}) => key )',
  imgUrl: 'distinct',
  demo: [
    {
      title: 'Default behavior',
      codeToExecute: () => from([0, 1, 1, 2, 1, 3, 3, 2, 4, 4]).pipe(distinct()),
      codeString:
        'from( [0,1,1,2,1,3,3,2,4,4] ).pipe(' +
        '\n\tdistinct()\t//emit only new values not emitted yet' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'Example with keySelector',
      codeToExecute: () =>
        from([
          { id: 0 },
          { id: 1 },
          { id: 1 },
          { id: 2 },
          { id: 1 },
          { id: 3 },
          { id: 3 },
          { id: 2 },
          { id: 4 },
          { id: 4 }
        ]).pipe(distinct(({ id }) => id)),
      codeString:
        'from([ ' +
        '\n\t{id:0}, {id:1}, {id:1}, {id:2}, {id:1},' +
        '\n\t{id:3}, {id:3}, {id:2},{id: 4}, {id:4}' +
        '\n]).pipe(' +
        '\n\tdistinct(({id}) => id)\t//emit only when id key is not emitted yet' +
        '\n).subscribe(console.log)',
      added: { label: 'none' }
    },
    {
      title: 'List without repeated elements',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(600),
          map(({ target }) => target.value.toLowerCase()),
          filter((alias) => !!alias),
          distinct()
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('input-1')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tmap(({ target }) => target.value.toLowerCase()),\t//emit value input' +
        '\n\tfilter((alias) => !!alias),\t\t\t\t\t\t//not emit empty values' +
        '\n\tdistinct()\t\t\t\t\t\t\t\t\t//emit only new values not emitted yet' +
        '\n.subscribe(console.log)',
      added: { label: 'input', numberInputs: 1 }
    }
  ]
};

export { distinctOperator };
