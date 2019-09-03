import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'ui-salary-to-card',
  templateUrl: './salary-to-card.component.html',
  styleUrls: ['./salary-to-card.component.scss']
})
export class SalaryToCardComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    const salaryData = [
      {cards: 5, salary: 22000},
      {cards: 3, salary: 19000},
      {cards: 10, salary: 88000},
      {cards: 0, salary: 100000},
      {cards: 27, salary: 56000}
  ];


    const xExtent = d3.extent(salaryData, d => d.salary);
    const yExtent = d3.extent(salaryData, d => d.cards);
    const xScale = d3.scaleLinear().domain(xExtent).range([0, 500]);
    const yScale = d3.scaleLinear().domain(yExtent).range([0, 500]);

    d3.select('svg').selectAll('circle')
      .data(salaryData).enter().append('circle')
      .attr('r', 5).attr('cx', d => xScale(d.salary))
      .attr('cy', d => yScale(d.cards));
  /*
    const yAxis = d3.axisRight().scale(yScale);
    d3.select('svg').append('g').attr('id', 'yAxisG').call(yAxis);
    const xAxis = d3.axisBottom().scale(xScale);
    d3.select('svg').append('g').attr('id', 'xAxisG').call(xAxis);
  */
  }
}
