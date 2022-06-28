import { delay, map, startWith } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const delayOperator: DataPage = {
  name: 'delay',
  description: 'It add a delay of x milliseconds to the emitted value.',
  imgUrl: 'delay',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          map(() => `clicked at ${new Date().toLocaleTimeString()}`),
          delay(2000),
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

export { delayOperator };
