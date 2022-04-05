import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { concat, fromEvent, Observable, Observer, of, Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { AddComponentVD, VisualDemo } from 'src/app/common/interfaces';

@Component({
  selector: 'app-visual-demo',
  templateUrl: './visual-demo.component.html',
  styleUrls: ['./visual-demo.component.scss']
})
export class VisualDemoComponent implements AfterViewInit, OnDestroy, OnInit {
  codeDemoConsole = '';
  runFinish = false;
  firstClickDemo$!: Observable<PointerEvent | null>;
  initialSubscription!: Subscription;
  restartSubscription!: Subscription;
  added!: { label: AddComponentVD; number: number };

  private _code: VisualDemo = {
    codeToExecute$: of(),
    codeString: '',
    added: { label: 'none' },
    wait: true
  };
  get code(): VisualDemo {
    return this._code;
  }
  @Input() set code(value: VisualDemo) {
    this._code = { ...this._code, ...value };
  }
  @ViewChild('demoConsole') demoConsoleElement!: ElementRef;

  observer: Observer<unknown> = {
    next: (value) => (value !== null ? this.concatDemoConsole(JSON.stringify(value)) : null),
    error: (error) => this.concatDemoConsole(`Error: ${error}`),
    complete: () => {
      this.runFinish = true;
      this.concatDemoConsole('Complete');
    }
  };

  ngOnInit(): void {
    if (this.code.added.label !== 'none' && !this.code.added.hasOwnProperty('number'))
      this.code.added = { ...this.code.added, number: 1 };
  }

  ngAfterViewInit(): void {
    this.firstClickDemo$ = fromEvent(this.demoConsoleElement.nativeElement, 'click').pipe(
      first(),
      tap(() => (this.code.wait = false)),
      map(() => null)
    );
    this.initSubscription();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  initSubscription() {
    this.initialSubscription = concat(this.firstClickDemo$, this.code.codeToExecute$).subscribe(
      this.observer
    );
  }

  concatDemoConsole(addString: string, icon = true): void {
    const newLine = this.codeDemoConsole ? '\n' : '';
    const iconString = icon ? '>' : '';
    this.codeDemoConsole = this.codeDemoConsole.concat(`${newLine}${iconString} ${addString}`);
  }

  restart(): void {
    if (this.runFinish) {
      this.runFinish = false;
      this.unsubscribeAll();
      this.codeDemoConsole = '';
      this.restartSubscription = this.code.codeToExecute$.subscribe(this.observer);
    }
  }

  unsubscribeAll() {
    if (this.initialSubscription) this.initialSubscription.unsubscribe();
    if (this.restartSubscription) this.restartSubscription.unsubscribe();
  }

  stop(): void {
    if (this.initialSubscription) this.initialSubscription.unsubscribe();
    if (this.restartSubscription) this.restartSubscription.unsubscribe();
    this.concatDemoConsole('---STOP---', false);
    this.runFinish = true;
  }
}
