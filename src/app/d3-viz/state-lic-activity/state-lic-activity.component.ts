import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { StateLicDataModel } from 'src/app/data/stateLicData.model';

@Component({
  selector: 'ui-state-lic-activity',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './state-lic-activity.component.html',
  styleUrls: ['./state-lic-activity.component.scss']
})
export class StateLicActivityComponent implements OnChanges {
  @ViewChild('chart', {static: true})
  private chartContainer: ElementRef;

  @Input()
  data: StateLicDataModel[];

  margin = {top: 10, right: 20, bottom: 60, left: 40};

  constructor() { }

  ngOnChanges(): void {
    if (!this.data) { return; }

    this.createChart();
  }

  onResize() {
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.state));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.newApplications)]);
      // .domain([0, d3.max(data, d => d.approved)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Mod This');
    // The state newApplications selection and binding procedure.
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.state))
        .attr('y', d => y(d.newApplications))
        .attr('width', x.bandwidth())
        .attr('height', d => contentHeight - y(d.newApplications));
        // .attr('height', d => contentHeight - y(d.approved));
  }

}
