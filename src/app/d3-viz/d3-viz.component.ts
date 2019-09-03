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

<<<<<<< HEAD
  @Input()
  bardata: BarService[] = [];

  constructor(private barService: BarService) {}


ngOnInit() {

  this.barService.getIds()
  .then(bardata => bardata = bardata);

  d3.select('svg')
  .selectAll('rect')
  .data([4, 6, 77, 55, 99])
  .enter()
  .append('rect')
  .attr('width', 30)
  .attr('height', d => d )
  .style('fill', '#FE9922')
  .style('stroke', '#9A8B7A')
  .style('stroke-width', '1px')
  .attr('x', (d, i) => i * 40)
  .attr('y', d => 100 - d);
=======
  constructor(
    private http: HttpClient) {
      this.data = this.http.get<StateLicDataModel>('./assets/stateLicActivity.json');
      this.dataMtg = this.http.get<StateMtgDataModel>('./assets/stateMtgActivity.json');
    }

ngOnInit() {

>>>>>>> 4ac3c2a30a95d86e416db996e3f2e7be4356a8b3
  }

}
