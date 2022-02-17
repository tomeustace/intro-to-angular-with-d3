import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';
import transition from 'd3-transition';
import * as d3 from 'd3';
import { HighlightService } from '../highlight.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-d3-bar-chart-controls',
  templateUrl: './d3-bar-chart-controls.component.html',
  styleUrls: ['./d3-bar-chart-controls.component.scss']
})
export class D3BarChartControlsComponent implements OnInit {

  height = 200;
  width = 700;
  data;
  // data = [{name: "paul", age: 35},{name: "sue", age: 80}, {name: "fred", age: 10}, {name: "alice", age: 50}, {name: "bob", age: 90}, {name: "jane", age: 30}, {name: "john", age: 40}];


  constructor(private highlightService: HighlightService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const url = 'https://api.github.com/search/users?';
    const queryUrl = `${url}q=bob&per_page=20`;

    this.httpClient
      .get(queryUrl)
      .subscribe((users: any) => {
        console.log("users", users);
        this.data = users?.items
        this.drawChart();
      });
  }

  drawChart(sorted?: boolean) {
    select("#bar-chart-1").selectAll("g").remove();
    select("#bar-chart-1").selectAll("rect").remove();

    if (sorted) {
      this.data = this.data.sort(function(a, b) {
          return a.id - b.id;
      });
    }

    const x = scaleBand()
      .domain(this.data.map(d => d.login))
      .range([0, this.width])
      .padding(0.2);

    const y = scaleLinear()
      .domain([100, 0])
      .range([this.height, 0]);

    select("#bar-chart-1")
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");

    select('#bar-chart-1')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
          .attr("x", (d) => x(d.login))
          .attr("width", x.bandwidth())
          .attr("y", (d) => { return this.height - y(d.id/10000); })
          .attr("height", (d) => y(d.id/10000))
          .attr("fill", "steelblue");
  }

  greaterThan(num) {
    selectAll('#bar-chart-1 > rect').filter(function() {
      const rects = selectAll('g > rect');
      console.log("selectAll('g > rect')", select(this).data());
      return (select(this).data()[0].id / 10000) > num;
    }).style('fill', 'green');
  }

  lessThan(num) {
    selectAll('#bar-chart-1 > rect').filter(function() {
      const rects = selectAll('g > rect');
      console.log("selectAll('g > rect')", select(this).data());
      return (select(this).data()[0].id / 10000) < num;
    }).style('fill', 'purple');
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}
