import { Component, OnInit } from '@angular/core';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { select, selectAll } from 'd3-selection';

@Component({
  selector: 'app-d3-scales',
  templateUrl: './d3-scales.component.html',
  styleUrls: ['./d3-scales.component.scss']
})
export class D3ScalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const arr = ['bob', 'tara', 'tim', 'sue', 'chip'];
    const scale = scaleOrdinal()
      .domain(arr)
      .range(['red', 'green', 'blue', 'pink', 'orange']);

    select(".scale-ordinal")
      .selectAll('div')
      .data(arr)
      .enter()
      .append('div')
      .style('background-color', (d) => scale(d))
      .text((d) => d)
      .style('color', 'white')
      .style('margin', '2px');

    const arr1 = ['bob', 'tara', 'tim', 'sue', 'chip'];
    // add scaleLinear explanation
    const scale1 = scaleLinear()
      .domain(arr)
      .range(['red', 'green', 'blue', 'pink', 'orange']);

    select(".scale-linear")
      .selectAll('div')
      .data(arr1)
      .enter()
      .append('div')
      .style('background-color', (d) => scale1(d))
      .text((d) => d)
      .style('color', 'white')
      .style('margin', '2px');
  }

}

