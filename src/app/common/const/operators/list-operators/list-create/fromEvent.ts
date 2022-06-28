import { map } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const fromEventOperator: DataPage = {
  name: 'fromEvent',
  description:
    'Observable that emits events from an specific event target.' +
    '\nFirst argument should be the element to listen.' +
    '\nSecond argument should be the event name of the element to listen.',
  imgUrl: 'fromEvent',
  demo: [
    {
      title: "Element: button, Event:'click'",
      codeToExecute: ({ obs }) => obs[0].pipe(map(() => 'click')),
      codeString:
        'const button$ = fromEvent(' +
        "\n\tdocument.getElementById('ExampleButton')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\nbutton$.pipe(' +
        "\n\tmap( ()=> 'click' )\t//Change output to 'click'" +
        '\n).subscribe(console.log)',
      added: { label: 'button', namesButtons: ['ExampleButton'], numberButtons: 1 }
    },
    {
      title: "Element: Input, Event:'change'",
      codeToExecute: ({ obs }) => obs[0].pipe(map(({ target }) => target.value)),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('ExampleInput')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\tmap( ({ target }) => target.value ) //Change output to the input value' +
        '\n).subscribe(console.log)',
      added: { label: 'input', namesInputs: ['ExampleInput'], numberButtons: 1 }
    }
  ]
};

export { fromEventOperator };
