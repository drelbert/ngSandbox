import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-directives-sandbox',
  templateUrl: './directives-sandbox.component.html',
  styleUrls: ['./directives-sandbox.component.scss']
})
export class DirectivesSandboxComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5, 6, 7];
  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6];

  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
