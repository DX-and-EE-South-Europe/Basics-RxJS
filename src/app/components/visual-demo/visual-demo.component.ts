import { HttpErrorResponse } from '@angular/common/http';
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
import { VisualDemo } from 'src/app/common/interfaces/interfaces';
import { JsonServerService } from 'src/app/services/json-server.service';

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
    wait: true,
    needJsonServer: false
  };
  get code(): VisualDemo {
    return this._code;
  }
  @Input() set code(value: VisualDemo) {
    this._code = { ...this._code, ...value };
  }
  @ViewChild('demoConsole') demoConsoleElement!: ElementRef;
  @ViewChildren('added') addedElements!: QueryList<ElementRef>;

  constructor(private _jss: JsonServerService) {}

  observer: Observer<unknown> = {
    next: (value) =>
      value !== null ? this.concatDemoConsole(JSON.stringify(value, null, 4)) : null,
    error: (error: HttpErrorResponse | Error) => {
      const textError =
        error instanceof Error
          ? `message: ${error.message}`
          : `status: ${error.status}\n\tstatusText: ${error.statusText}`;
      this.unsubscribeAll();
      this.initSubscription();
      return this.concatDemoConsole(`Error:\n\t${textError}`);
    },
    complete: () => {
      this.runFinish = true;
      this.concatDemoConsole('Complete');
    }
  };

  callCodeToExecute(): Observable<unknown> {
    const paramsCodeToExecute = this.code.needJsonServer
      ? { jss: this._jss, obs: this.obsAddedElements }
      : { obs: this.obsAddedElements };
    return this.code.codeToExecute(paramsCodeToExecute);
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
