import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({  // Decorator that defines the class below as a component
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// Below the app logic defined, support the view by inserting the title text
// parts, property is title and value is 'ngSandbox'
export class AppComponent {
  title = 'ngSandbox';


  constructor(
    public media: MediaObserver) {}

}

// Note that the component is created, updated and destroyed with lifecycle hooks
// Hook example = ngOnInit() for initialize the component or directive after Angular displays the data-bound properties
// Hook example = ngOnChanges() responds when Angular sets or resets data-bound inoput properties
