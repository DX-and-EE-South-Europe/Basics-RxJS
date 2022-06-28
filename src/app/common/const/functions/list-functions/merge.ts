import { DataPage } from 'src/app/common/interfaces/interfaces';
import { endWith, interval, map, merge, startWith, take } from 'rxjs';

const mergeFunction: DataPage = {
  name: 'merge',
  description:
    'Function that joins all of the observables as one and emits when some of them emits. It completes when all of the internal observables completes.',
  imgUrl: 'merge',
  demo: [
    {
      title: 'Simple example',
      codeToExecute: () =>
        merge(
          interval(500).pipe(
            take(6),
            map((x) => `1º observable - ${++x}`)
          ),
          interval(1000).pipe(
            take(3),
            map((x) => `2º observable - ${++x}`)
          ),
          interval(300).pipe(
            take(7),
            map((x) => `3º observable - ${++x}`)
          )
        ).pipe(endWith('End')),
      codeString:
        'merge(' +
        '\n\t// interval that emit 4 values every 0.5 seconds' +
        '\n\tinterval( 500 ).pipe(' +
        '\n\t\ttake( 4 )' +
        '\n\t\tmap((x) => `1º observable - ${++x}`)' +
        '\n\t),' +
        '\n\t// interval that emit 2 values every second' +
        '\n\tinterval( 1000 ).pipe(' +
        '\n\t\ttake( 2 )' +
        '\n\t\tmap((x) => `2º observable - ${++x}`)' +
        '\n\t),' +
        '\n\t// interval that emit 5 values every 0.3 seconds' +
        '\n\tinterval( 300 ).pipe(' +
        '\n\t\ttake( 5 )' +
        '\n\t\tmap((x) => `3º observable - ${++x}`)' +
        '\n\t)' +
        '\n).pipe(' +
        "\n\t//before complete emit 'End'" +
        "\n\tendWith('End')," +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'none' }
    },
    {
      title: 'Simple example 2',
      codeToExecute: ({ obs }) =>
        merge(obs[0].pipe(map(() => 'Button A')), obs[1].pipe(map(() => 'Button B'))).pipe(
          startWith('Click some button')
        ),
      codeString:
        'button1$ = fromEvent(buttonA, "click");' +
        '\nbutton2$ = fromEvent(buttonB, "click");' +
        '\n' +
        '\nmerge(' +
        '\n\tbutton1$.pipe(map(()=>"Button A"),' +
        '\n\tbutton2$.pipe(map(()=>"Button B")' +
        "\n)pipe(startWith( 'Click some button' ))" +
        '\n.subscribe(console.log)',
      added: { label: 'button', numberButtons: 2, namesButtons: ['A', 'B'] }
    }
  ]
};

export { mergeFunction };
