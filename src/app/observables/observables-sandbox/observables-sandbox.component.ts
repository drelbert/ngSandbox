import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ui-observables-sandbox',
  templateUrl: './observables-sandbox.component.html',
  styleUrls: ['./observables-sandbox.component.scss']
})
export class ObservablesSandboxComponent implements OnInit, OnDestroy {

  private firsObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firsObsSubscription =
     interval(1000).subscribe(n =>
      console.log(`Been ${n} seconds since subscribing`));
  }

  ngOnDestroy(): void {
    this.firsObsSubscription.unsubscribe();
  }
}
