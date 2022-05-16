import { DataPage } from 'src/app/common/interfaces/interfaces';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const distinctUntilChangedOperator: DataPage = {
  name: 'distinctUntilChanged',
  description: '',
  imgUrl: 'distinctUntilChanged',
  demo: [
    {
      codeToExecute: () =>
        new Observable<number>((subs) => {
          const dataArray: number[] = [0, 1, 1, 2, 1, 3, 3, 4];
          const timeNext = 500;
          let count = 0;
          const interval = setInterval((): void => subs.next(dataArray[count++]), timeNext);
          function stop() {
            clearInterval(interval);
            subs.complete();
          }
          setTimeout(() => stop(), timeNext * dataArray.length);
          return () => stop();
        }).pipe(distinctUntilChanged((prev, cur) => prev === cur)),
      codeString:
        'new Observable<number>((subs) => {' +
        '\n\tconst dataArray: number[] = [0, 1, 1, 2, 1, 3, 3, 4];\t//values to emit' +
        '\n\tconst timeNext = 500;\t\t\t\t\t\t\t//time between emissions' +
        '\n\tlet count = 0;' +
        '\n' +
        '\n\t//Interval to emit values' +
        '\n\tconst interval = setInterval(' +
        '\n\t\t(): void => subs.next(dataArray[count++]), ' +
        '\n\t\ttimeNext' +
        '\n\t);' +
        '\n' +
        '\n\t//Clear interval' +
        '\n\tfunction stop() {' +
        '\n\t\tclearInterval(interval);' +
        '\n\t\tsubs.complete();' +
        '\n\t}' +
        '\n' +
        '\n\t//Call stop() when all values emitted' +
        '\n\tsetTimeout(() => stop(), timeNext * dataArray.length);' +
        '\n' +
        '\n\t//Function when unsubscribe' +
        '\n\treturn () => stop();' +
        '\n})' +
        '\n.pipe(' +
        '\n\tdistinctUntilChanged((prev, cur) => prev===cur)\t\t//emit value if different from previous' +
        '\n.subscribe(console.log)',
      added: { label: 'none', names: [] }
    }
  ]
};

export { distinctUntilChangedOperator };
