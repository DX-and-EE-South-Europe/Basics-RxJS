import { Component } from '@angular/core';
import { DataLink } from './common/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-app';
  headerLink: DataLink = { name: 'RxJS', router: 'home', theme: 'link-header' };
}
