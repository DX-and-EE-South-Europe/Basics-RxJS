import { of } from 'rxjs';
import { catchError, debounceTime, filter, mergeMap } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const catchErrorOperator: DataPage = {
  name: 'catchError',
  description:
    'When the observable throws an error, it catches the error and returns a new value, observable or throws an error. After this, the suscription of the observable is completed.' +
    '\nIn the case of emitting a new observable, it automatically suscribes to the new one and completes when it completes.',
  note:
    "Also, you can manage an error throught observer's error." +
    "\n(See in 'observables/executing')",
  imgUrl: 'catchError',
  demo: [
    {
      title: 'HTTP - GET',
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(500),
          filter(({ target }) => Number(target.value) > 0),
          mergeMap(({ target }) => jss.getPost$(target.value)),
          catchError(() => of("Sorry, there isn't exist any post with that id"))
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('IdInput')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\t// emits only after 500ms without another emission' +
        '\n\tdebounceTime(500),' +
        '\n\t//not emit when value minus 0' +
        '\n\tfilter( ({ target }) => Number(target.value) > 0 ),' +
        '\n\t// emit the emissions of the subscription of the http response observable' +
        '\n\tmergeMap( ({ target }) =>' +
        '\n\t\tajax.getJSON(`http://localhost:3000/posts/${target.value}`)' +
        '\n\t),' +
        '\n\t// if error, emit this message as last value emitted' +
        '\n\tcatchError(() =>' +
        '\n\t\tof("Sorry, there isn\'t exist any post with that id")' +
        '\n\t)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'input', numberInputs: 1, namesInputs: ['id'], typeInputs: ['number'] },
      needJsonServer: true
    }
  ]
};

export { catchErrorOperator };
