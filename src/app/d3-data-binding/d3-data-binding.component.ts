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
    const kittieSelection = select("#kitty-svg")
      .selectAll('circle')
      .data(this.kitties);
    console.log(kittieSelection);

    kittieSelection
      .enter()
      .append('circle')
      .attr('fill', (kitty) => kitty.color)
      .attr('cx', (kitty) => kitty.age * 40)
      .attr('cy', 100)
      .attr('r', 40);
      // .attr('cy', (d) => d.age * 10)
      // .attr('r', (d) => d.age * 2);
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  ngOnDestroy(): void {
  }

}
