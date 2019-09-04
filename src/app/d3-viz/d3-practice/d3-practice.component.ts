import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { StateMtgDataModel } from 'src/app/data/stateMtgData.model';


@Component({
  selector: 'ui-d3-practice',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './d3-practice.component.html',
  styleUrls: ['./d3-practice.component.scss']
})
export class D3PracticeComponent implements OnChanges {
  @ViewChild('chart', {static: true})
  private chartContainer: ElementRef;

  @Input()
  mtgData: StateMtgDataModel[];

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() { }

  ngOnChanges(): void {
    if (!this.mtgData) { return; }

    // Inserting a simple HTML selector for data join operation/DOM operation in the ngAfterContentInit() lifecycle hook.
    // d3.select('p').style('color', 'red');

    this.createChart();
  }

  private createChart(): void {
      d3.select('svg').remove();

      const element = this.chartContainer.nativeElement;
      const mtgData = this.mtgData;

      const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);

      const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
      const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

      const x = d3
        .scaleBand()
        .rangeRound([0, contentWidth])
        .padding(0.1)
        .domain(mtgData.map(d => d.month));


      const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(mtgData, d => d.applications)]);

      const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x));

      g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

      g.selectAll('.bar')
      .data(mtgData)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.month))
        .attr('y', d => y(d.applications))
        .attr('width', x.bandwidth())
        .attr('height', d => contentHeight - y(d.applications));

  }

}

