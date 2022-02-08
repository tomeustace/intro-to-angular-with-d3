import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear, scaleBand } from 'd3-scale';
@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.scss']
})
export class D3BarChartComponent implements OnInit {

  h = 200;
  width = 20;
  data = [{name: "bob", age: 20}, {name: "jane", age: 30}, {name: "john", age: 40}];
  constructor() { }

  ngOnInit(): void {
    const x = scaleBand()
      .domain(this.data.map(d => d.name))
      .range([0, 100])
      .padding(0.1);

    const y = scaleLinear()
      .domain([this.h, 0])
      .range([0, 500]);

    select('#bar-chart')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
          .attr("class", "bar")
          .attr("x", (d) => {
            console.log("x", x(d.name));
            return x(d.name);
          })
          .attr("width", 20)
          // .attr("width", x.bandwidth())
          .attr("y", (d) => { return y(d.age) - this.h; })
          .attr("height", (d) => {
            const h = this.h + +y(d.age);
            console.log(h);
            console.log(typeof h);
            return +h;
          })
          .attr("fill", "steelblue");
      // .attr('x', (d) => y(d))
    // const selection = select("#bar-chart")
    //   selectAll("rect")
    //       .data(this.data);
    //   console.log(selection);

    //     selection.enter().append("rect")
    //       .attr("class", "bar")
    //       .attr("x", function(d) { return x(d); })
    //       .attr("width", x.bandwidth())
    //       .attr("y", function(d) { return y(d); })
    //       .attr("height", function(d) { return 100 - y(d); });
  }
}
