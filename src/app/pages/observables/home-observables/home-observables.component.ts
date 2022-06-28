import { Component } from '@angular/core';

@Component({
  selector: 'app-home-observables',
  templateUrl: './home-observables.component.html',
  styleUrls: ['./home-observables.component.scss']
})
export class HomeObservablesComponent {
  observables = {
    title: 'Observables',
    example:
      'const obs$=new Observable<string>( subscriber => {' +
      "\n\tsubscriber.emit( 'This section is about...' );" +
      "\n\tsubscriber.emit( 'Observables' );" +
      '\n\treturn () => { subscriber.complete() };' +
      '\n});' +
      "\n\nconst subscription = obs$.pipe( startWith( 'Init observable' ) ).subscribe(observer);" +
      '\nsubscripion.unsubscribe();'
  };
}
