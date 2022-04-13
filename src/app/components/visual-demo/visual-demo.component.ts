import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { concat, fromEvent, Observable, Observer, of, Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { VisualDemo } from 'src/app/common/interfaces';

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
  obsAddedElements: Observable<unknown>[] = [];
  private _code: VisualDemo = {
    codeToExecute: () => of(),
    codeString: '',
    added: { label: 'none', names: [] },
    wait: true
  };
  get code(): VisualDemo {
    return this._code;
  }
  @Input() set code(value: VisualDemo) {
    this._code = { ...this._code, ...value };
  }
  @ViewChild('demoConsole') demoConsoleElement!: ElementRef;
  @ViewChildren('added') addedElements!: QueryList<ElementRef>;

  observer: Observer<unknown> = {
    next: (value) => (value !== null ? this.concatDemoConsole(JSON.stringify(value)) : null),
    error: (error) => this.concatDemoConsole(`Error: ${error}`),
    complete: () => {
      this.runFinish = true;
      this.concatDemoConsole('Complete');
    }
  };

  callCodeToExecute(): Observable<unknown> {
    return this.code.codeToExecute({ obs: this.obsAddedElements });
  }

  ngOnInit(): void {
    if (this.code.added.label !== 'none' && !this.code.added.hasOwnProperty('number'))
      this.code.added = { ...this.code.added, number: 1, names: [] };
  }

  ngAfterViewInit(): void {
    this.firstClickDemo$ = fromEvent(this.demoConsoleElement.nativeElement, 'click').pipe(
      first(),
      tap(() => (this.code.wait = false)),
      map(() => null)
    );

    if (this.addedElements.length > 0) {
      for (let i = 0; i < this.addedElements.length; ++i) {
        const event =
          this.code.added.event ??
          (() => {
            switch (this.code.added.label) {
              case 'input':
                return 'input';
              case 'button':
              default:
                return 'click';
            }
          })();
        this.obsAddedElements.push(fromEvent(this.addedElements.get(i)?.nativeElement, event));
      }
    }
    this.initSubscription();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  initSubscription() {
    const obs$ = this.code.wait
      ? concat(this.firstClickDemo$, this.callCodeToExecute())
      : this.callCodeToExecute();

    this.initialSubscription = obs$.subscribe(this.observer);
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
      this.restartSubscription = this.callCodeToExecute().subscribe(this.observer);
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
