import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'ui-state-mortgage-activity',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './state-mortgage-activity.component.html',
  styleUrls: ['./state-mortgage-activity.component.scss']
})
export class StateMortgageActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    d3.select('p').style('color', 'blue');

    d3.select('svg')
     .append('circle')
     .attr('r', 20)
     .attr('cx', 500)
     .attr('cy', 50)
     .style('fill', 'blue');

    d3.select('svg')
     .append('circle')
     .attr('r', 40)
     .attr('cx', 75)
     .attr('cy', 150)
     .style('fill', 'blue');

    d3.select('svg')
     .append('circle')
     .attr('r', 40)
     .attr('cx', 300)
     .attr('cy', 30)
     .style('fill', 'blue');

    const yScale = d3.scaleLinear()
     .domain([0, 56000])
     .range([0, 100])
     .clamp(true);

    d3.select('svg')
    .selectAll('rect')
    .data([14, 68, 56000, 560, 1000, 3001])
    .enter()
    .append('rect')
      .attr('x', (d, i) => i * 10)
      .attr('width', 10)
      .attr('height', d => yScale(d))
      .attr('y', d => 100 - yScale(d))
      .style('fill', '#1EB980');
  }
}
