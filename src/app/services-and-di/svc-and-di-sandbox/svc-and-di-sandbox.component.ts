import { Component, OnInit } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'ui-svc-and-di-sandbox',
  templateUrl: './svc-and-di-sandbox.component.html',
  styleUrls: ['./svc-and-di-sandbox.component.scss'],
  providers: [StateService]
})
export class SvcAndDiSandboxComponent implements OnInit {

  stateLicData: {stateAgency: string,
                 newApplications: number,
                 approved: number,
                 denied: number,
                 revoked: number,
                 surrendered: number,
                 termianted: number} [] = [];

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateLicData = this.stateService.stateLicData;
  }
}
