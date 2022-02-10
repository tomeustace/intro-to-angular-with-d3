import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';
import transition from 'd3-transition';
import * as d3 from 'd3';
import { HighlightService } from '../highlight.service';
@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.scss']
})
export class D3BarChartComponent implements OnInit {

  height = 200;
  width = 300;
  data = [{name: "paul", age: 35},{name: "sue", age: 80}, {name: "fred", age: 5}, {name: "alice", age: 50}, {name: "bob", age: 90}, {name: "jane", age: 30}, {name: "john", age: 40}];

  x = scaleBand()
    .domain(this.data.map(d => d.name))
    .range([0, this.width])
    .padding(0.2);

  y = scaleLinear()
    .domain([0, 100])
    .range([this.height, 0]);

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    select("#bar-chart-1")
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(axisBottom(this.x));

    select('#bar-chart-1')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
          .attr("x", (d) =>this.x(d.name))
          .attr("width", this.x.bandwidth())
          .attr("y", (d) => { return this.height - this.y(d.age); })
          .attr("height", (d) => this.y(d.age))
          .attr("fill", "steelblue");

          this.drawBar2();
          this.drawBar3();
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  drawBar2() {
    select("#bar-chart-2").selectAll("rect").remove();
    select("#bar-chart-2")
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(axisBottom(this.x));

    select('#bar-chart-2')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
          .attr("x", (d) => this.x(d.name))
          .attr("width", this.x.bandwidth())
          .attr("y", (d) => { return this.height - this.y(d.age); })
          .attr("height", (d) => this.y(d.age))
          .attr("fill", "steelblue")
          .on("mouseover", function(d) {
            select(this).transition().duration(1500).attr("fill", "red");
          })
          .on("mouseout", function(d) {
            select(this).attr("fill", "green");
          })
          .on("click", function(d) {
            d3.select(this).transition().duration(1000).attr("height", 0).attr("y", 200);
          });

  }
  drawBar3() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    select("#bar-chart-3").selectAll("rect").remove();
    select("#bar-chart-3")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + this.height + ")")
      .call(axisBottom(this.x));

    select("#bar-chart-3")
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(axisLeft(this.y));

    select('#bar-chart-3')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
          .attr("x", (d) => this.x(d.name) + margin.left)
          .attr("width", this.x.bandwidth())
          .attr("y", (d) => { return this.height - this.y(d.age); })
          .attr("height", (d) => this.y(d.age))
          .attr("fill", "steelblue")
          .on("mouseover", function(d) {
            select(this).transition().duration(1500).attr("fill", "red");
          })
          .on("mouseout", function(d) {
            select(this).attr("fill", "green");
          })
          .on("click", function(d) {
            d3.select(this).transition().duration(1000).attr("height", 0).attr("y", 200);
          });

  }
}
