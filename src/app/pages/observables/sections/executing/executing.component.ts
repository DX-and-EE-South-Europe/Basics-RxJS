import { Component } from '@angular/core';

@Component({
  selector: 'app-executing',
  templateUrl: './executing.component.html',
  styleUrls: ['../../templates-observables/templates-observables.component.scss']
})
export class ExecutingComponent {
  executing = {
    exampleCallback: 'obs$.subscribe( console.log );',
    example2Callback:
      'function onHandlingError(error){' +
      '\n\tconsole.error(`Error message: ${error.message}`);' +
      '\n};' +
      '\n\nobs$.subscribe( console.log, onHandlingError );',
    example3Callback:
      'function onHandlingError(error){' +
      '\n\tconsole.error(`Error message: ${error.message}`);' +
      '\n};' +
      '\n\nfunction onHandlingComplete(){' +
      "\n\tconsole.log('Complete');" +
      '\n};' +
      '\n\nobs$.subscribe( console.log, onHandlingError, onHandlingComplete );',
    exampleObserver:
      'const observer: Observer<any> = {' +
      '\n\tnext: (value) => console.log(value);' +
      '\n\terror: (error) => console.error(`Error message: ${error.message}`;' +
      "\n\tcomplete: () => console.log('Complete')" +
      '\n};' +
      '\n\nobs$.subscribe(observer);'
  };
}
