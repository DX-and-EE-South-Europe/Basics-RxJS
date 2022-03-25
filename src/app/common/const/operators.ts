import { DataPage } from '../interfaces';
import { from, interval, Observable, of } from 'rxjs';
import { distinct, distinctUntilChanged, filter, map, take, tap } from 'rxjs/operators';

export const operatorsPages: DataPage[] = [
  {
    name: 'map',
    description:
      'To extra2ct or transform data that return the original Observable.\nEven you can emit a new observable or new data.',
    imgUrl: 'map',
    demo: [
      {
        codeToExecute$: interval(500).pipe(
          map((val) => val * 3),
          take(10)
        ),
        codeString: `interval(500)
        .pipe(
            map((val) => val * 3),
            take(5)
        )
        .subscribe(console.log)`
      }
    ]
  },
  {
    name: 'filter',
    description:
      "Filter the emissions of the observable.\nIf condition is true, it'll return the Observable emission; otherwise it wont return.",
    imgUrl: 'filter',
    demo: [
      {
        codeToExecute$: interval(500).pipe(
          filter((val) => val % 2 === 0),
          take(5)
        ),
        codeString: `interval(500)
        .pipe(
            filter((val) => val % 2 === 0),
            take(5)
        )
        .subscribe(console.log)`
      }
    ]
  },
  {
    name: 'tap',
    description: "To execute side-effects for notifications.\nIt doesn't change the Observable",
    imgUrl: 'tap',
    demo: [
      {
        codeToExecute$: interval(500).pipe(
          take(3),
          tap((val) => alert(val))
        ),
        codeString: `interval(500)
        .pipe(
          take(3),
          tap((val) => alert(val)),
        )
        .subscribe(console.log)`
      }
    ]
  },
  {
    name: 'distinct',
    description: '',
    imgUrl: 'distinct',
    demo: [
      {
        codeToExecute$: from([0, 1, 1, 2, 1, 3, 3]).pipe(distinct((val) => val)),
        codeString: `from([0,1,1,2,1,3,3])
        .pipe(
          distinct((val) => val)
        )
        .subscribe(console.log)`
      }
    ]
  },
  {
    name: 'distinctUntilChanged',
    description: '',
    imgUrl: 'distinctUntilChanged',
    demo: [
      {
        codeToExecute$: new Observable<number>((subs) => {
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
      .subscribe(console.log)`
      }
    ]
  },
  {
    name: 'of',
    description: 'Observable that emits the values synchronously and completes.',
    imgUrl: 'of',
    demo: [
      {
        codeToExecute$: of('a', 0, [1, 2, 3, 4, 5], { c: 3 }),
        codeString: `of(
        'a',
        0,
        [1,2,3,4,5], 
        {c:3}
      ).subscribe(console.log)`
      }
    ]
  }
];
