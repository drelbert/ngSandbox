import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

import { StateLicDataModel } from 'src/app/data/stateLicData.model';

@Component({
  selector: 'ui-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input()
  data: StateLicDataModel[];

  constructor() { }

  ngOnInit() {

  dataViz(this.data);

  function dataViz(incomingData: StateLicDataModel[]) {
    d3.select('svg').selectAll('div.State')
    .data(incomingData)
    .enter()
    .append('div')
    .attr('class', 'State')
    .html(d => d.State);
  }
  }
}
