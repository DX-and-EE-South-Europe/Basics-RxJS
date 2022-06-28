import { map, startWith } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const startWithOperator: DataPage = {
  name: 'startWith',
  description:
    'It emits the argument as a first value before the original observable emits any value. Then it continues with the observable emissions.',
  note: 'Its really important the order of the operators. The value emitted by the startWith will be affected by the following operators after it.',
  imgUrl: 'startWith',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          map(() => 'clicked'),
          startWith('Click button')
        ),
      codeString:
        'const click$ = fromEvent(' +
        "\n\tdocument.getElementById('Button')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\nclick$.pipe(' +
        "\n\tmap( () => 'clicked' ),\t\t//emit 'Button clicked'" +
        "\n\tstartWith( 'Click button' )\t\t//first value emitted will be 'Click button'" +
        '\n).subscribe(console.log);',
      added: { label: 'button', numberButtons: 1 },
      needJsonServer: false
    }
  ]
};

export { startWithOperator };
