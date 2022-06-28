import { Component } from '@angular/core';

@Component({
  selector: 'app-creating-observable',
  templateUrl: './creating-observable.component.html',
  styleUrls: ['../../templates-observables/templates-observables.component.scss']
})
export class CreatingObservableComponent {
  creating = {
    example:
      '//Synchronous and finite' +
      '\nconst obs$ = ' +
      '\n\tnew Observable<string>((subscriber)=>{' +
      "\n\t\tsubscriber.next('Hello!!');" +
      "\n\t\tsubscriber.next('It is synchronous');" +
      '\n' +
      '\n\t\t//throw error' +
      '\n\t\t//const a = undefined;' +
      "\n\t\t//a.some='some';" +
      '\n' +
      '\n\t\tsubscriber.complete();' +
      '\n' +
      "\n\t\tsubscriber.next('never emitted');" +
      '\n\t});',
    exampleAsync:
      '//Asynchronous and infinite' +
      '\nconst obs$ = ' +
      '\n\tnew Observable<number>( (subscriber)=>{' +
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
    exampleTryCatch:
      '//Using try/catch' +
      '\nconst obs$ = ' +
      '\n\tnew Observable<any>((subscriber)=>{' +
      '\n\t\ttry {' +
      "\n\t\t\tsubscriber.next('Hello!!');" +
      "\n\t\t\tsubscriber.next('It is synchronous');" +
      '\n\t\t\tsubscriber.complete();' +
      '\n\t\t} catch (error) {' +
      '\n\t\t\tsubscriber.error(error);' +
      '\n\t\t}' +
      '\n\t});'
  };
}
