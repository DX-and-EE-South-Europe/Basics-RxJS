import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: 'pre[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit(): void {
    hljs.highlightElement(this._elRef.nativeElement);
  }
}
