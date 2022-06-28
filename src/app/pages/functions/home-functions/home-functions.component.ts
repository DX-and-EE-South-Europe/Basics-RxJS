import { Component } from '@angular/core';

@Component({
  selector: 'app-home-functions',
  templateUrl: './home-functions.component.html',
  styleUrls: ['./home-functions.component.scss']
})
export class HomeFunctionsComponent {
  functionsInfo = {
    title: 'Functions',
    description: {
      intro: 'Functions are a like a creation operators with a joining functionality:',
      list: [
        'Create a new observable as a result of join multiple observables',
        'Their arguments are the observables to join.',
        'You can apply pipeable operators.',
        "Import from 'rxjs'.",
        'Some of them are:'
      ],
      examples: ['merge', 'concat', 'forkJoin', '...'],
      codeExample:
        "import { merge } from 'rxjs';" +
        "\nimport { debounceTime, map, catchError } from 'rxjs/operators';" +
        '\n\nmerge(' +
        '\n\tobs1$' +
        '\n\tobs2$.pipe(' +
        '\n\t\tmap( ({ target }) => target.value)' +
        '\n\t)' +
        '\n).pipe( catchError( () => of() )).subscribe(console.log);'
    },
    note: 'Depending on the function and how do you pass the observables, it will emit a value, array or object:',
    noteExamples: [
      '//Emit a value' +
        "\nimport { merge } from 'rxjs';" +
        '\n\nmerge( obs1$, obs2$ ).' +
        '\nsubscribe(console.log);',
      '//Emit an array' +
        "\nimport {combineLatest } from 'rxjs';" +
        '\n\ncombineLatest( [ obs1$, obs2$ ] )' +
        '\n.subscribe(console.log);',
      '//Emit an object' +
        "\nimport {combineLatest } from 'rxjs';" +
        '\n\ncombineLatest( { prop1: obs1$, prop2: obs2$ } )' +
        '\n.subscribe(console.log);'
    ]
  };
}
