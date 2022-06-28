import { Observable } from 'rxjs';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const disposingObservables: DataPage = {
  name: 'Disposing',
  demo: [
    {
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
        }),
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
        '\n// Subscription of the observable' +
        '\nconst subscription= obs$.suscribe( console.log );' +
        '\n' +
        '\n// When click-on stop button' +
        '\naddEventListeenr(stopButton, () => {' +
        '\n\t// Unsubscribe (call return of the obs$)' +
        '\n\tsubscription.unsubscribe();' +
        "\n\tconsole.log('--STOP--');" +
        '\n});',
      added: { label: 'none' }
    }
  ]
};

export { disposingObservables };
