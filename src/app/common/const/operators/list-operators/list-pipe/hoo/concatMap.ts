import { concatMap, endWith, interval, map, mergeMap, take } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const concatMapOperator: DataPage = {
  name: 'concatMap',
  description:
    'Emit the subscription of the internal observable and add in a queue the next of the internal Observables emitted.' +
    '\nIt will subscribe to the next observable of the queue when the current internal observable subscription will complete.',
  note: 'It should return an Observable.',
  imgUrl: 'concatMap',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(concatMap(() => interval(1000).pipe(take(5), endWith('completed')))),
      codeString:
        'const button$ = fromEvent(' +
        "\n\tdocument.getElementById('EmitButton')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\nbutton$.pipe(' +
        '\n\tconcatMap( () =>' +
        '\n\t\t//emit numerical ascended sequence every second' +
        '\n\t\tinterval(1000).pipe(' +
        '\n\t\t\ttake(5) \t\t\t\t//complete when emit 5 times' +
        "\n\t\t\tendWith('completed') \t//emit 'completed' when completes" +
        '\n\t\t)' +
        '\n\t)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'button', numberButtons: 1, namesButtons: ['Emit'] },
      needJsonServer: true
    }
  ]
};

export { concatMapOperator };
