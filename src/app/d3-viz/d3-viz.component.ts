import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

import { Bar } from './shared/bar.model';
import { BarService } from './shared/bar.service';

@Component({
  selector: 'ui-d3-viz.component',
  templateUrl: './d3-viz.component.html',
  styleUrls: ['./d3-viz.component.scss']
})

export class D3VizComponent implements OnInit {

  @Input()
  bardata: Bar[] = [];

  constructor(private barService: BarService) {}


ngOnInit() {

  this.barService.getIds()
  .then(bardata => this.bardata = bardata)

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
  }

}
