import { DataPage } from 'src/app/common/interfaces/interfaces';
import { debounceTime, filter, map, mergeMap, take } from 'rxjs/operators';
import { combineLatest, interval, of } from 'rxjs';

const mergeMapOperator: DataPage = {
  name: 'mergeMap',
  description:
    'Emit the subscription of the internal observable and cancel the subscription when the internal observables completes.' +
    '\nIt subscribes to all of the internal observable and will emit all of the emitted values of these subscriptions by order of output of each emitted value without taking into account the order of the subscriptions.',
  note: 'It should return an Observable.' + '\nVery useful for http calls.',
  imgUrl: 'mergeMap',
  demo: [
    {
      title: 'Simple Example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          mergeMap(() =>
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
        '\n\tmergeMap( () =>' +
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
    },
    {
      title: 'HTTP - GET',
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(500),
          filter(({ target }) => Number(target.value) > 0),
          mergeMap(({ target }) => jss.getPost$(target.value))
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
        '\n\t)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'input', numberInputs: 1, namesInputs: ['id'], typeInputs: ['number'] },
      needJsonServer: true
    },
    {
      title: 'HTTP - PATCH - POST 3',
      codeToExecute: ({ obs, jss }) =>
        obs[0].pipe(
          debounceTime(500),
          filter(({ target }) => !!target.value),
          mergeMap(({ target }) => jss.patchPost$({ title: target.value, id: 3 }))
        ),
      codeString:
        'const input$ = fromEvent(' +
        "\n\tdocument.getElementById('TitleInput')," +
        "\n\t'change'" +
        '\n);' +
        '\n' +
        '\ninput$.pipe(' +
        '\n\t//emits only after 500ms without another emission' +
        '\n\tdebounceTime(500),' +
        '\n\t//not emit when empty values' +
        '\n\tfilter( ({ target }) => !!target.value ),' +
        '\n\t// emit the emissions of the subscription of the http response observable' +
        '\n\tmergeMap( ({ target }) =>' +
        '\n\t\tajax({' +
        "\n\t\t\turl:'http://localhost:3000/posts/3'," +
        "\n\t\t\tmethod: 'PATCH'," +
        '\n\t\t\tbody: { title: target.value, id:  3 }' +
        '\n\t\t})' +
        '\n\t)' +
        '\n).subscribe(console.log);\n\n',
      added: { label: 'input', numberInputs: 1, namesInputs: ['title'], typeInputs: ['text'] },
      needJsonServer: true
    }
  ]
};

export { mergeMapOperator };
