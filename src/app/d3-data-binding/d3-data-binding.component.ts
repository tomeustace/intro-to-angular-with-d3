import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';
import { selectAll, select } from 'd3-selection';

@Component({
  selector: 'app-d3-data-binding',
  templateUrl: './d3-data-binding.component.html',
  styleUrls: ['./d3-data-binding.component.scss']
})
export class D3DataBindingComponent implements OnInit {

  kitties = [
    {
      name: 'Mittens',
      age: 1,
      breed: 'tabby',
      color: 'gray'
    },
    {
      name: 'Fluffy',
      age: 3,
      breed: 'persian',
      color: 'orange'
    },
    {
      name: 'Spike',
      age: 5,
      breed: 'siamese',
      color: 'black'
    },
    {
      name: 'Bob',
      age: 6,
      breed: 'siamese',
      color: 'blue'
    }
  ]

  constructor(
    private highlightService: HighlightService
    ) {
  }

  ngOnInit(): void {
    const arr = [1, 2, 3, 4, 5];
    select('.card1').selectAll('button').data(arr).enter().append('button').text(d => d);
    const d = select('.card1').select('button').data();
    const data = select('.card1').selectAll('button').data();
    const nodes = select('.card1').selectAll('button').nodes();
    console.log(d);
    console.log(data);
    console.log(nodes);

    const kittieSelection = select("#kitty-svg")
      .selectAll('circle')
      .data(this.kitties);

    console.log("kittieSelection", kittieSelection);

    kittieSelection
      .enter()
      .append('circle')
      .attr('fill', (kitty) => kitty.color)
      .attr('cx', (kitty) => kitty.age * 40)
      .attr('cy', 100)
      .attr('r', 40);

    const kittieSelection1 = select("#kitty-svg1")
      .selectAll('circle')
      .data(this.kitties);

    kittieSelection1
      .enter()
      .append('circle')
      .attr('fill', (kitty) => kitty.color)
      .attr('cx', (kitty) => kitty.age * 40)
      .attr('cy', 100)
      .attr('r', 40);

    select('#kitty-svg1')
      .selectAll('circle')
      .data(this.kitties.filter((kitty) => kitty.age >= 3))
      .exit()
      .remove();
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  ngOnDestroy(): void {
  }

}
