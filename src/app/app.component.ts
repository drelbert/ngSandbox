import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSandbox';
  constructor(public media: MediaObserver) {}
}

