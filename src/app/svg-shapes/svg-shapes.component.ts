import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightService } from '../highlight.service';
import { PerformanceService } from '../performance.service';
import { select, selectAll } from 'd3-selection';

@Component({
  selector: 'app-svg-shapes',
  templateUrl: './svg-shapes.component.html',
  styleUrls: ['./svg-shapes.component.scss']
})
export class SvgShapesComponent {

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    const rect = select('rect');
    const rects = selectAll('rect');
    console.log(rect);
    console.log(rects);
  }

  ngAfterViewInit() {
    this.highlightService.highlightAll();
  }

  ngOnDestroy() { }

}
