import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-risk-factors',
  templateUrl: './risk-factors.component.html',
  styleUrls: ['./risk-factors.component.scss']
})
export class RiskFactorsComponent implements OnInit {
  @Input() factor: {type: string, name: string, description: string, weight: string};

  constructor() { }

  ngOnInit() {
  }

}
