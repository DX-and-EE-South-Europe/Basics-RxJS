import { Component } from '@angular/core';
import { DataLink } from './common/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-app';
  headerLink: DataLink = {
    name: 'RxJS',
    isRelativeRoute: false,
    theme: 'link-header'
  };
}
