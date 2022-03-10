import { Component } from '@angular/core';
import { DataLink } from 'src/app/common/interfaces';
import { createDataLinkArray } from 'src/app/common/utils';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  creationOperatorsName = ['of', 'from', 'fromEvent'];
  creationOperators!: DataLink[];
  pipeableOperators = ['General', 'High-Order Observables', 'Error Handling'];
  generalOperators!: DataLink[];

  constructor() {
    this.creationOperators = createDataLinkArray(
      this.creationOperatorsName,
      true
    );
  }
}
