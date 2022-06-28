import { concat, endWith, interval, of } from 'rxjs';
import { delay, map, startWith, take } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const concatFunction: DataPage = {
  name: 'concat',
  description:
    'Function that suscribes to the first observable. When it completes, the function suscribes to the next observable and so on until all complete.',
  imgUrl: 'concat',
  demo: [
    {
      title: 'Simple example',
      codeToExecute: () =>
        concat(
          of('First observable'),
          interval(1000).pipe(
            take(3),
            map((x) => `Second observable- ${++x}`)
          ),
          of('Third observable').pipe(delay(2000))
        ).pipe(endWith('End')),
      codeString:
        'concat(' +
        '\n\t// observable that emit synchsronously' +
        "\n\tof( 'First observable' )," +
        '\n\t// interval that emit 3 values and complete' +
        '\n\tinterval( 1000 ).pipe(' +
        '\n\t\ttake( 3 )' +
        '\n\t\tmap((x) => `Second observable- ${++x}`)' +
        '\n\t)' +
        '\n\t// observable that emit with a delay of 2 seconds' +
        "\n\tof('Third observable').pipe( delay( 2000 ) )" +
        '\n).pipe(' +
        "\n\t//before complete emit 'End'" +
        "\n\tendWith('End')," +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'none' }
    },
    {
      title: 'Taking into account the order of the observables',
      codeToExecute: ({ obs }) =>
        concat(
          obs[1].pipe(
            take(1),
            map(() => 'Button 2')
          ),
          obs[0].pipe(
            take(1),
            map(() => 'Button 1')
          )
        ).pipe(startWith("Click first 'Button 2' and later 'Button 1'")),
      codeString:
        "//Observable of button 1. It emits 'Button 1' once" +
        '\nconst button1$ = fromEvent(' +
        "\n\tdocument.getElementById('Button 1')," +
        "\n\t'click'" +
        '\n).pipe( take(1), map(()=>"Button 1")' +
        '\n' +
        "\n//Observable of button 2. It emits 'Button 2' once" +
        ' \nconst button2$ = fromEvent(' +
        "\n\tdocument.getElementById('Button 2')," +
        "\n\t'click'" +
        "\n).pipe( take(1), map(()=>'Button 2')," +
        '\n\n\n//Observable that emit first button2 and later button1$' +
        '\nconcat( button2$, button1$ ).pipe(' +
        "\n\tstartWith(\"Click first 'Button 2' and later 'Button 1' \")" +
        '\n).subscribe(console.log)',
      added: { label: 'button', numberButtons: 2, namesButtons: ['Button 1', 'Button 2'] }
    }
  ]
};

export { concatFunction };
