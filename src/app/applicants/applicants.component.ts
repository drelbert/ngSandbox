import { Component, OnInit } from '@angular/core';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydro', weight: 1.009, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.002, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.94, symbol: 'Li'}
];

@Component({
  selector: 'ui-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
