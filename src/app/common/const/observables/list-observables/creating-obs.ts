import { Observable } from 'rxjs';
import { map, take } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const createObservables: DataPage = {
  name: 'Creating Observable',
  demo: [
    {
      title: 'Synchronous',
      codeToExecute: () =>
        new Observable<string>((sub) => {
          sub.next('Hello!!');
          sub.next('This is a synchronous observable');
          sub.complete();
          sub.next('Dont emit because completed');
        }),
      codeString:
        'const obs$ = new Observable<string>((sub)=>{' +
        "\n\tsub.next('Hello!!');" +
        "\n\tsub.next('This is a synchronous observable');" +
        '\n' +
        '\n\tsub.complete();' +
        '\n' +
        "\n\tsub.next('Dont emit because completed');" +
        '\n});' +
        '\n\nobs$.subscribe( console.log );',
      added: { label: 'none' }
    },
    {
      title: 'Asynchronous',
      codeToExecute: () =>
        new Observable<number>((sub) => {
          let count = 0;
          const interval = setInterval(() => {
            sub.next(count++);
          }, 1000);

          setTimeout(() => {
            sub.complete();
            clearInterval(interval);
          }, 5500);
          return () => {
            clearInterval(interval);
            sub.complete();
          };
        }),
      codeString:
        'const obs$ = new Observable<number>((subscriber)=>{' +
        '\n\tlet count = 0' +
        '\n\n\t// Interval that emit the count increased by one every second' +
        '\n\tconst interval = setInterval(() => {' +
        '\n\t\tsubscriber.next(count++);' +
        '\n\t}, 1000);' +
        '\n' +
        '\n\t// Timeout that stop the execution and clear interval' +
        '\n\tsetTimeout( () => {' +
        '\n\t\tclearInterval(interval);' +
        '\n\t\tsubscriber.complete();' +
        '\n\t}, 5500);' +
        '\n' +
        '\n\t// When subscription call unsubscribe method, execute it' +
        '\n\treturn () => {' +
        '\n\t\tclearInterval(interval);' +
        '\n\t\tsubscriber.complete();' +
        '\n\t};' +
        '\n});' +
        '\n\nobs$.subscribe( console.log );',
      added: { label: 'none' }
    },
    {
      title: 'Asynchronous with operators',
      codeToExecute: () =>
        new Observable<number>((sub) => {
          let count = 0;
          const interval = setInterval(() => {
            sub.next(count++);
          }, 1000);
          return () => {
            clearInterval(interval);
            sub.complete();
          };
        }).pipe(
          take(5),
          map((val) => val * 2)
        ),
      codeString:
        'const obs$ = new Observable<Number>((subscriber)=>{' +
        '\n\tlet count = 0' +
        '\n\n\t// Interval that emit the count increased by one every second' +
        '\n\tconst interval = setInterval(() => {' +
        '\n\t\tsubscriber.next(count++);' +
        '\n\t}, 1000);' +
        '\n' +
        '\n\t// When subscription call unsubscribe method' +
        '\n\t// clean interval and stop execution' +
        '\n\treturn () => {' +
        '\n\t\tclearInterval(interval);' +
        '\n\t\tsubscriber.complete();' +
        '\n\t};' +
        '\n});' +
        '\n\nobs$.pipe(' +
        '\n\t// Take the first 5 values emitted and complete' +
        '\n\ttake( 5 ),' +
        '\n\t// Emit the value multiply by 2' +
        '\n\tmap( val => val*2 )' +
        '\n).subscribe( console.log );',
      added: { label: 'none' }
    }
  ]
};

export { createObservables };
