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
       'HGT, BANC Nord')
  ];

  constructor() { }

  ngOnInit() {
  }

}
