import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { concat, fromEvent, Observer, of, Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { VisualDemo } from 'src/app/common/interfaces';

@Component({
  selector: 'app-visual-demo',
  templateUrl: './visual-demo.component.html',
  styleUrls: ['./visual-demo.component.scss']
})
export class VisualDemoComponent implements AfterViewInit, OnDestroy {
  codeDemoConsole = '';
  runFinish = false;
  initialSubscription!: Subscription;
  restartSubscription!: Subscription;

  private _code: VisualDemo = {
    codeToExecute$: of(),
    codeString: '',
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
    next: (value) =>
      value !== null ? this.concatDemoConsole(String(value)) : null,
    error: (error) => this.concatDemoConsole(`Error: ${error}`),
    complete: () => {
      this.runFinish = true;
      this.concatDemoConsole('Complete');
    }
  };

  ngAfterViewInit(): void {
    const firstClick$ = fromEvent(
      this.demoConsoleElement.nativeElement,
      'click'
    ).pipe(
      first(),
      tap(() => (this.code.wait = false)),
      map(() => null)
    );
    this.initialSubscription = concat(
      firstClick$,
      this.code.codeToExecute$
    ).subscribe(this.observer);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  concatDemoConsole(addString: string, icon = true): void {
    const newLine = this.codeDemoConsole ? '\n' : '';
    const iconString = icon ? '>' : '';
    this.codeDemoConsole = this.codeDemoConsole.concat(
      `${newLine}${iconString} ${addString}`
    );
  }

  restart(): void {
    if (this.runFinish) {
      this.runFinish = false;
      this.unsubscribeAll();
      this.codeDemoConsole = '';
      this.restartSubscription = this.code.codeToExecute$.subscribe(
        this.observer
      );
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
