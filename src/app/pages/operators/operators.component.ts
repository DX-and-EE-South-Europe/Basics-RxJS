import { Component } from '@angular/core';
import { navOperator } from 'src/app/common/const/nav-operator';
import { BaseNav, ComplexNav } from 'src/app/common/interfaces/interfaces';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  navPage: BaseNav | ComplexNav = navOperator;
}
