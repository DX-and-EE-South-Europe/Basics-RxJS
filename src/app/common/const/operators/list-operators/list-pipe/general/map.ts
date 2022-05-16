import { DataPage } from 'src/app/common/interfaces/interfaces';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const mapOperator: DataPage = {
  name: 'map',
  description:
    'To extract or transform data that return the original Observable.\nEven you can emit a new observable or new data.',
  imgUrl: 'map',
  demo: [
    {
      codeToExecute: () =>
        interval(500).pipe(
          map((val) => val * 3),
          take(20)
        ),
      codeString:
        'interval(500).pipe(' +
        '\n\tmap((val) => val * 3),\t//transform emitted value to value*3' +
        '\n\ttake(20)\t\t\t\t//take the first 20 values emitted' +
        '\n).subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { mapOperator };
