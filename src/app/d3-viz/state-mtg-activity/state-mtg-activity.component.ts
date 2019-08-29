import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, } from '@angular/core';
import * as d3 from 'd3';

import { StateMtgDataModel } from 'src/app/data/stateMtgData.model';

@Component({
  selector: 'ui-state-mtg-activity',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './state-mtg-activity.component.html',
  styleUrls: ['./state-mtg-activity.component.scss']
})
export class StateMtgActivityComponent implements OnChanges {
  @ViewChild('lineChart', {static: true})
  // private chartContainer: ElementRef;

  @Input()
  dataMtg: StateMtgDataModel[];

  margin = {top: 10, right: 20, bottom: 60, left: 40};
  xScale: any;
  yScale: any;

  constructor() { }

  ngOnChanges(): void {
    if (!this.dataMtg) { return; }

    this.lineChart();
  }

  onResize() {
    this.lineChart();
  }

  private lineChart(): void {
    d3.select('svg').remove();

    const dataMtg = this.dataMtg;

    const blue = '#5eaec5';
    const green = '#92c463';
    const orange = '#fe9a22';

    const xScale = this.xScale.d3.scaleLinear().domain([1, 10.5]).range([20, 480]);
    const yScale = this.yScale.d3.scaleLinear().domain([0, 35]).range([480, 20]);

    const xAxis = d3.axisBottom(xScale)
      .scale(xScale)
      .tickSize(480)
      .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    d3.select('svg').append('g').attr('id', 'xAxisG').call(xAxis);


    const  yAxis = d3.axisRight(yScale)
      .scale(yScale)
      .ticks(10)
      .tickSize(480);
    d3.select('svg').append('g').attr('id', 'yAxisG').call(yAxis);

    d3.select('svg').selectAll('circle.applications')
   .data(dataMtg)
   .enter()
   .append('circle')
   .attr('class', 'applications')
   .attr('r', 5)
   .attr('cx', d => xScale(d.month))
   .attr('cy', d => yScale(d.applications))
   .style('fill', blue);

    d3.select('svg').selectAll('circle.approved')
   .data(dataMtg)
   .enter()
   .append('circle')
   .attr('class', 'approved')
   .attr('r', 5)
   .attr('cx', d => xScale(d.month))
   .attr('cy', d => yScale(d.approved))
   .style('fill', green);

    d3.select('svg').selectAll('circle.failed')
   .data(dataMtg)
   .enter()
   .append('circle')
   .attr('class', 'failed')
   .attr('r', 5)
   .attr('cx', d => xScale(d.month))
   .attr('cy', d => yScale(d.failed))
   .style('fill', orange);

  }

}
