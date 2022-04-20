import { DataPage } from '../../../interfaces/interfaces';
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
      codeString: `new Observable<number>((subs) => {
        const dataArray: number[] = [0, 1, 1, 2, 1, 3, 3, 4];
        const timeNext = 500;
        let count = 0;
        const interval = setInterval(
          (): void => subs.next(dataArray[count++]), 
          timeNext
        );
        function stop() {
          clearInterval(interval);
          subs.complete();
        }
        setTimeout(() => stop(), timeNext * dataArray.length);
        return () => stop();
      })
      .pipe(
        distinctUntilChanged((prev, cur) => prev===cur)
      .subscribe(console.log)`,
      added: { label: 'none', names: [] }
    }
  ]
};

export { distinctUntilChangedOperator };
