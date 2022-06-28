import { merge, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { DataPage } from 'src/app/common/interfaces/interfaces';

const subscribingObservables: DataPage = {
  name: 'Subscribing',
  demo: [
    {
      title: 'Independent',
      codeToExecute: () => {
        const obs$ = new Observable<number>((sub) => {
          const interval = setInterval(() => {
            sub.next(Math.random());
          }, 1000);
          return () => {
            clearInterval(interval);
          };
        });
        return merge(obs$, obs$).pipe(map((val) => Math.round(val * 1000) / 1000));
      },
      codeString:
        '// Observable that emit a random number every second' +
        '\nconst obs$ = new Observable<number>((sub)=>{' +
        '\n\tconst interval = setInterval(() => {' +
        '\n\t\tsub.next(Math.random());' +
        '\n\t}, 1000)' +
        '\n\n\treturn()=>{' +
        '\n\t\t clearInterval(interval);' +
        '\n\t};' +
        '\n});' +
        '\n' +
        '\n// Subscribe twice to the same observable' +
        '\nmerge(obs$, obs$).pipe(' +
        '\n\t// round to 3 decimal places the number emitted by the observable' +
        '\n\tmap( (val) => Math.round(val * 1000) / 1000 )' +
        '\n).subscribe( console.log );',
      added: { label: 'none' }
    },
    {
      title: 'Multicast using share operator',
      codeToExecute: () => {
        const obs$ = new Observable<number>((sub) => {
          const interval = setInterval(() => {
            sub.next(Math.random());
          }, 1000);
          return () => {
            clearInterval(interval);
          };
        }).pipe(share());
        return merge(obs$, obs$).pipe(map((val) => Math.round(val * 1000) / 1000));
      },
      codeString:
        '// Observable that emit a random number every second' +
        '\nconst obs$ = new Observable<number>((sub)=>{' +
        '\n\tconst interval = setInterval(() => {' +
        '\n\t\tsub.next(Math.random());' +
        '\n\t}, 1000)' +
        '\n\n\treturn()=>{' +
        '\n\t\t clearInterval(interval);' +
        '\n\t};' +
        '\n}).pipe( share() );\t// Multicast the original observable' +
        '\n' +
        '\n// Subscribe twice to the same observable' +
        '\nmerge(obs$, obs$).pipe(' +
        '\n\t// round to 3 decimal places the number emitted by the observable' +
        '\n\tmap( (val) => Math.round(val * 1000) / 1000 )' +
        '\n).subscribe( console.log );',
      added: { label: 'none' }
    }
  ]
};

export { subscribingObservables };
