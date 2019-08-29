import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StateLicDataModel } from '../data/stateLicData.model';
import { StateMtgDataModel } from '../data/stateMtgData.model';


@Component({
  selector: 'ui-d3-viz.component',
  templateUrl: './d3-viz.component.html',
  styleUrls: ['./d3-viz.component.scss']
})

export class D3VizComponent implements OnInit {
  data: Observable<StateLicDataModel>;
  dataMtg: Observable<StateMtgDataModel>;

  constructor(
    private http: HttpClient) {
      this.data = this.http.get<StateLicDataModel>('./assets/stateLicActivity.json');
      this.dataMtg = this.http.get<StateMtgDataModel>('./assets/stateMtgActivity.json');
    }

ngOnInit() {

  }

}
