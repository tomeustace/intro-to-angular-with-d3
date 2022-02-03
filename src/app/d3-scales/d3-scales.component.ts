import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { scaleOrdinal, scaleLinear, scaleTime } from 'd3-scale';
import { select, selectAll } from 'd3-selection';

@Component({
  selector: 'app-d3-scales',
  templateUrl: './d3-scales.component.html',
  styleUrls: ['./d3-scales.component.scss'],
})
export class D3ScalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const names = ['bob', 'tara', 'tim', 'sue', 'chip'];
    const scaleNames = scaleOrdinal()
      .domain(names)
      .range(['red', 'green', 'blue', 'orange', 'purple']);

    const scale = scaleOrdinal()
      .domain(names)
      .range(['red', 'green']);

      console.log(scale('bob'));

    select(".scale-ordinal")
      .selectAll('div')
      .data(names)
      .enter()
      .append('div')
      .style('background-color', (d) => scaleNames(d))
      .text((d) => d)
      .style('color', 'white')
      .style('margin', '2px');

    const linear = scaleLinear()
        .domain([0, 1000])
        .range([0, 500]);

    console.log(linear(0)); // -> 0
    console.log(linear(500)); // -> 250
    console.log(linear(1000)); // -> 500
    console.log(linear.invert(500)); // -> 1000

    select('#linear-x')
      .selectAll('rect')
      .data([80,150,300,400,430])
      .enter()
      .append('rect')
      .attr('x', (d) => linear(d))

    select('#linear-y')
      .selectAll('rect')
      .data([30,50,100,140,180])
      .enter()
      .append('rect')
      .attr('y', (d) => linear(d))
      .attr('x', (d) => linear(d))

    // console.log(linear(-0.5)); // "rgb(255, 128, 128)"
    // console.log(linear(+0.5)); // "rgb(128, 192, 128)"
    // console.log(linear(1)); // "rgb(128, 192, 128)"

    const dates = [new Date(2022, 0, 1), new Date(2022, 0, 2)];
    const timeScale = scaleTime()
      .domain(dates)
      .range([0, 500]);

  console.log(timeScale(new Date(2022, 0, 1))); // 0
  console.log(timeScale(new Date(2022, 0, 1, 12))); // 250
  console.log(timeScale(new Date(2022, 0, 2))); // 500
  console.log(timeScale.invert(0)); // Sat Jan 01 2022 00:00:00 GMT-0000 (GMT)
  console.log(timeScale.invert(250)); // Sat Jan 01 2022 12:00:00 GMT-0000 (GMT)
  console.log(timeScale.invert(500)); // Sat Jan 02 2022 00:00:00 GMT-0000 (GMT)

    select('#time-x')
      .selectAll('circle')
      .data([new Date(2022, 0, 1, 2), new Date(2022, 0, 1, 5), new Date(2022, 0, 1, 10)])
      .enter()
      .append('circle')
      .attr('r', 20)
      .attr('cy', 50)
      .attr('cx', (d) => timeScale(d));

// console.log(timeScale(new Date(2000, 0, 1,  5))); // 200
// console.log(timeScale(new Date(2000, 0, 1, 16))); // 640
// console.log(timeScale.invert(200)); // Sat Jan 01 2000 05:00:00 GMT-0800 (PST)
// console.log(timeScale.invert(640)); // Sat Jan 01 2000 16:00:00 GMT-0800 (PST)

    // const color = scaleOrdinal()
    //     .domain(["tom", "dick", "harry"])
    //     .range(["red", "white", "green"]);

    // console.log(color("tom")); // "rgb(255, 128, 128)"
    // console.log(color.range()); // "rgb(128, 192, 128)"
    // console.log(color.domain()); // "rgb(128, 192, 128)"
    // console.log(color.domain("tom")()); // "rgb(128, 192, 128)"
    // console.log(color.domain("dick")()); // "rgb(128, 192, 128)"
    // console.log(color.domain("harry")()); // "rgb(128, 192, 128)"
  }

}

