import { Component, OnInit } from '@angular/core';

import { selectAll, select } from 'd3-selection';

@Component({
  selector: 'app-d3-selecting',
  templateUrl: './d3-selecting.component.html',
  styleUrls: ['./d3-selecting.component.scss']
})
export class D3SelectingComponent implements OnInit {

  performanceTime: number;
  colors = ["#6e40aa","#6054c8","#4c6edb","#368ce1","#23abd8","#1ac7c2","#1ddfa3","#30ef82","#52f667","#7ff658","#aff05b"];
  count = 0;
  constructor() { }

  ngOnInit(): void {
    // fix prism display issue by reloading!!
    if (!localStorage.getItem('reload')) {
        localStorage.setItem('reload', 'no reload')
        location.reload()
      } else {
        localStorage.removeItem('reload')
      }
  }

  changeTileColor() {
    if (this.count > 10) this.count = 0;
    selectAll('mat-grid-tile').style('background-color', this.colors[this.count]);
    this.count++
  }

  translateRectX() {
    select('rect').attr("transform", "translate(15, 0)");
  }
  translateRectY() {
    select('rect').attr("transform", "translate(15, 15)");
  }

  scaleRect() {
    select('rect').attr("transform", "scale(.9)");
  }

  skewRect() {
    select('rect').attr("transform", "skewY(10)");
  }

  rotateRect() {
    select('rect').attr("transform", "rotate(5)");
  }

  changeColor() {
    this.count > 10 ? this.count = 0 : this.count++;
    const sel = selectAll('g > rect').filter(function() {
      const rects = selectAll('g > rect');
      // console.log("selectAll('g > rect')", rects);
      return !select(this).node().getAttribute('style').includes('green');
    });
    console.log(sel);
    console.log(sel.nodes());
    sel.style('fill', () => this.colors[this.count]);
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
