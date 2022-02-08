import { Component, OnInit } from '@angular/core';
import { scaleOrdinal, scaleLinear, scaleTime } from 'd3-scale';
import { select, selectAll } from 'd3-selection';
import { axisLeft, axisRight, axisTop, axisBottom } from 'd3-axis';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-d3-axis',
  templateUrl: './d3-axis.component.html',
  styleUrls: ['./d3-axis.component.scss']
})
export class D3AxisComponent implements OnInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    const linearVertical = scaleLinear()
        .domain([0, 500])
        .range([0, 200]);

    const linearHorizontal = scaleLinear()
        .domain([0, 500])
        .range([0, 250]);


    const left = axisLeft(linearVertical);
    left.ticks(3);
    select("#axis-left-right")
      .append("g")
      .attr("transform", "translate(35,30)")
      .call(left);

    const right = axisRight(linearVertical);
    right.ticks(4);
    select("#axis-left-right")
      .append("g")
      .attr("transform", "translate(250,30)")
      .call(right);

    const top = axisTop(linearHorizontal);
    select("#axis-top-bottom")
      .append("g")
      .attr("transform", "translate(10,50)")
      .call(top);

    const bottom = axisBottom(linearHorizontal);
    select("#axis-top-bottom")
      .append("g")
      .attr("transform", "translate(10,70)")
      .call(bottom);


    const datesLeft = [new Date(2022, 0, 1), new Date(2022, 0, 7)];
    const timeScaleLeft = scaleTime()
      .domain(datesLeft)
      .range([0, 200]);

    const timeAxisLeft = axisLeft(timeScaleLeft);
    select("#time-axis")
      .append("g")
      .attr("transform", "translate(100,70)")
      .call(timeAxisLeft);

    const dates = [new Date(2021, 0, 1), new Date(2022, 0, 1)];
    const timeScaleRight = scaleTime()
      .domain(dates)
      .range([0, 200]);

    const timeAxisRight = axisRight(timeScaleRight);
    select("#time-axis")
      .append("g")
      .attr("transform", "translate(150,70)")
      .call(timeAxisRight);
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }
}
