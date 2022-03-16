import { Component } from '@angular/core';
import { filter, interval, take } from 'rxjs';
import { navOperator } from 'src/app/common/const/nav-operator';
import { BaseNav, ComplexNav, VisualDemo } from 'src/app/common/interfaces';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  navPage: BaseNav | ComplexNav = navOperator;
  codeDemo: VisualDemo = {
    codeToExecute$: interval(500).pipe(
      filter((val) => val % 2 === 0),
      take(10)
    ),
    codeString: `interval(500)
      .pipe(
        filter((val) => val % 2 === 0),
        take(10)
      )
      .subscribe(console.log)`
  };
}
