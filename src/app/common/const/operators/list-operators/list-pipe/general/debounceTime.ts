import { DataPage } from 'src/app/common/interfaces/interfaces';
import { debounceTime, map } from 'rxjs/operators';
import { merge } from 'rxjs';

const debounceTimeOperator: DataPage = {
  name: 'debounceTime',
  description:
    'Emit when the last emitted value passes the time specified in milliseconds as an argument.' +
    '\nIf there are more emitted values in less than the specificated time, debounceTime waits until there were a stop of more than the specified time without new emitted values.  ',
  imgUrl: 'debounceTime',
  demo: [
    {
      title: 'Simple example',
      codeToExecute: ({ obs }) =>
        obs[0].pipe(
          debounceTime(600),
          map(({ target }) => target.value)
        ),
      codeString:
        'const input$ = fromEvent(input, "change")\t//emit InputEvents' +
        '\n\ninput$.pipe(' +
        '\n\tdebounceTime(600)\t\t\t//emits only after 600ms without another emission from source observable' +
        '\n\tmap(({ target }) => target.value)\t//change emitted value to target.value from InputEvent' +
        '\n).subscribe(console.log);',
      added: { label: 'input', numberInputs: 1 }
    },
    {
      title: 'Last clicked button in less than 1 second',
      codeToExecute: ({ obs }) =>
        merge(obs[0].pipe(map(() => 'A')), obs[1].pipe(map(() => 'B'))).pipe(debounceTime(1000)),
      codeString:
        "//Observable of button A. It emits 'A'" +
        '\nconst clickA$ = fromEvent(' +
        "\n\tdocument.getElementById('A')," +
        "\n\t'click'" +
        "\n).pipe( map( () => 'A' );" +
        '\n' +
        "\n//Observable of button B. It emits 'B'" +
        ' \nconst clickB$ = fromEvent(' +
        "\n\tdocument.getElementById('B')," +
        "\n\t'click'" +
        "\n).pipe( map( () => 'B' );" +
        '\n\n//Emit the values emitted by clickA$ and clickB$' +
        '\nmerge( clickA$, clickB$ )' +
        '\n.pipe(' +
        '\n\tdebounceTime(1000)\t//emits only after 1 second without another emission' +
        '\n).subscribe(console.log);',
      added: { label: 'button', numberButtons: 2, namesButtons: ['A', 'B'] },
      needJsonServer: false
    }
  ]
};

export { debounceTimeOperator };
