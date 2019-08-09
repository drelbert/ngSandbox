import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'ui-dashboard-ng',
  templateUrl: './dashboard-ng.component.html',
  styleUrls: ['./dashboard-ng.component.scss']
})
export class DashboardNgComponent {


  constructor() {}
}
