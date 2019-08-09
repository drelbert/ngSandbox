import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-risk-dashboard',
  templateUrl: './risk-dashboard.component.html',
  styleUrls: ['./risk-dashboard.component.scss']
})

export class RiskDashboardComponent implements OnInit {
  riskFactors = [
    {type: 'Income',
    name: 'Income',
    description: 'Assessment of income over mortgage',
    weight: 4},
    {type: 'Asset',
    name: 'Asset History',
    description: 'Map of historical assets',
    weight: 3},
  ];

  constructor() {
 }

  ngOnInit() {
  }
}
