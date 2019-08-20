import { Component, OnInit, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

import { TweetsModel } from 'src/app/data/tweets.model';


@Component({
  selector: 'ui-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {



  @Input()
  data: TweetsModel[];

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() { }

  ngOnInit(): void {
    if (!this.data) { return; }

    const nestedTweets = d3.nest()
    .key(d => d.user)
    .entries(this.data);

    nestedTweets.forEach(d => {
      d.numTweets = d.values.length;
    })

    const maxTweets = d3.max(nestedTweets, d => d.numTweets);
    const yScale = d3.scaleLinear().domain([0, maxTweets]).range([0, 500]);
    d3.select("svg")
  .selectAll("rect")
  .data(nestedTweets)
  .enter()
  .append("rect")
  .attr("width", 50)
  .attr("height", d => yScale(d.numTweets))
  .attr("x", (d,i) => i * 60)
  .attr("y", d => 500 - yScale(d.numTweets))
  .style("fill", "#FE9922")
  .style("stroke", "#9A8B7A")
  .style("stroke-width", "1px");
 }

}

/* Simple bar graph
      d3.select('svg')
      .selectAll('rect')
      .data([14, 68, 24500, 430, 19, 1000, 5555])
      .enter()
      .append('rect')
      .attr('width', 10) // bar width
      .attr('height', d => d)
      .style('fill', '#1EB980')
      .style('stroke', '#9A8B7A')
      .style('stroke-width', '1px')
      .attr('x', (d, i) => i * 20)  // width of x axis
      .attr('y', d => 150 - d); // sets y minus its length(100) to present rectangles as expected

 //Simple circle example
    d3.select("svg")
  .append("circle")
  .attr("r", 20)
  .attr("cx",20)
  .attr("cy",20)
  .style("fill","red");
d3.select("svg")
  .append("text")
  .attr("id", "a")
  .attr("x",20)
  .attr("y",20)
  .style("opacity", 0)
  .text("HELLO WORLD");
d3.select("svg")
  .append("circle")
  .attr("r", 100)
  .attr("cx",400)
  .attr("cy",400)
  .style("fill","lightblue");
d3.select("svg")
  .append("text")
  .attr("id", "b")
  .attr("x",400)
  .attr("y",400)
  .style("opacity", 0)
  .text("Uh, hi.");

  d3.select("#a").transition().delay(1000).style("opacity", 1);
  d3.select("#b").transition().delay(3000).style("opacity", .75);
  */
