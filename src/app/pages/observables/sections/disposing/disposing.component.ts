import { Component } from '@angular/core';

@Component({
  selector: 'app-disposing',
  templateUrl: './disposing.component.html',
  styleUrls: ['../../templates-observables/templates-observables.component.scss']
})
export class DisposingComponent {
  disposing = {
    exampleInfiniteObservable:
      '//Asynchronous and infinite' +
      '\nconst obs$ = new Observable<number>( (subscriber)=>{' +
      '\n\t\tlet count = 0' +
      '\n\t\tconst interval = setInterval(() => {' +
      '\n\t\t\tsubscriber.next(count++);' +
      '\n\t\t}, 1000);' +
      '\n' +
      '\n\t\tsetTimeout( () => {' +
      '\n\t\t\tsubscriber.complete();' +
      '\n\t\t}, 5500);' +
      '\n' +
      '\n\t\treturn () => {' +
      '\n\t\t\tclearInterval(interval);' +
      '\n\t\t\tsubscriber.complete();' +
      '\n\t\t};' +
      '\n\t});',
    exampleDisposing:
      '//Disposing' +
      '\nconst subscription = obs$.subscribe(observer);' +
      '\n\nsetTimeout( () => {' +
      '\n\tsubscription.unsubscribe();' +
      '\n}, 3000);'
  };
}
