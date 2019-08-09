import { Component, OnInit } from '@angular/core';

import { Applicant } from '../applicant.model';


@Component({
  selector: 'ui-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {
  applicants: Applicant[] = [
    new Applicant(
      'Tor Larsen',
       'NO568790',
       'KN555,000',
       'House, boat, houseboat, car, 3 bikes',
       'HGT, BANC Nord'),
    new Applicant(
      'Darth Vader',
      'DS576900',
      'SW10,000',
      'Death Star, 7 Droids, Fighter',
      'U Bank Battlestar'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
