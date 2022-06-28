import { combineLatest, interval, of } from 'rxjs';
import { exhaustMap, take, map } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const exhaustMapOperator: DataPage = {
  name: 'exhaustMap',
  description:
    'Suscribes to the emitted internal observable and ignores the following internal observables emmited until the current suscription of the internal observable completes. When this happend, it will wait for a new internal observable to suscribe.',
  imgUrl: 'exhaustMap',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          exhaustMap(() =>
            combineLatest({
              time: of(new Date().toLocaleTimeString()),
              numberI: interval(1000).pipe(take(5))
            })
          ),
          map(({ time, numberI }) => `Click at ${time} > Emission: ${numberI}`)
        ),
      codeString:
        'const button$ = fromEvent(' +
        "\n\tdocument.getElementById('EmitButton')," +
        "\n\t'click'" +
        '\n);' +
        '\n' +
        '\nbutton$.pipe(' +
        '\n\texhaustMap( () =>' +
        '\n\t\t//function that emits an observable whose internal emissions are {time: string, numberI: number}' +
        '\n\t\tcombineLatest({' +
        '\n\t\t\t// observable that emits the time when button was clicked' +
        '\n\t\t\ttime: of( new Date().toLocaleTimeString() ),' +
        '\n\t\t\t//emit first 5 numerical ascended numbers every second' +
        '\n\t\t\tnumberI: interval(1000).pipe( take(5) ) ' +
        '\n\t\t})' +
        '\n\t),' +
        "\n\t// emit in format 'timeClick - numberInterval'" +
        '\n\tmap( ({ time, numberI }) => `Click at ${time} > Emission: ${numberI}`)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'button', numberButtons: 1, namesButtons: ['Emit'] },
      needJsonServer: true
    }
  ]
};

export { exhaustMapOperator };
