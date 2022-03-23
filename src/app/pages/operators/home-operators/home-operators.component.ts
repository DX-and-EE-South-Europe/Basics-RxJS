import { Component } from '@angular/core';

@Component({
  selector: 'app-home-operators',
  templateUrl: './home-operators.component.html',
  styleUrls: ['./home-operators.component.scss']
})
export class HomeOperatorsComponent {
  operatorsInfo = {
    title: 'Operators',
    description: 'Operators are functions. Mainly there are two kinds:',
    pipeableText: {
      name: 'Pipeable Operators',
      list: [
        'Take the Observable as its input and return another Observable as output.',
        "Import from 'rxjs/operators'.",
        'You could use them like ordinary functions, and use many of them at together. To read them easier, you should implement them inside .pipe() method of the main Observable.',
        'They could be for:'
      ],
      examples: ['Transformation', `Filter`, 'Multicast', 'Error Handle', '...'],
      codeExample: `import { startWith, take, map } from 'rxjs/operators';
       
obs$.pipe(
  startWith('Init'),
  take(3),
  map((val)=>val.name)
).subscribe(console.log);`
    },
    creationText: {
      name: 'Creation Operators',
      list: ['To create an Observable with some predefined behavior.', "Import from 'rxjs'."],
      codeExample: `import { of } from 'rxjs';
       
of( 1, [2,3,4], {regrets:'Hello World'} ).subscribe(console.log);`
    },
    note: 'However, there are other operators like Higher-order Observables and join creation operators, but you can see them in the others sections.'
  };
}
