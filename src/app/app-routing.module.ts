import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgShapesComponent } from './svg-shapes/svg-shapes.component';
import { ResourcesComponent } from './resources/resources.component';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { D3SelectingComponent } from './d3-selecting/d3-selecting.component';
import { D3DataBindingComponent } from './d3-data-binding/d3-data-binding.component';
import { D3ScalesComponent } from './d3-scales/d3-scales.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3AxisComponent } from './d3-axis/d3-axis.component';

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<Observable<string>> {
  resolve(): Observable<string> {
    performance.mark('resolved-data-start');
    return of('Resolved Data').pipe(delay(500));
  }
}

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'svg-shapes', component: SvgShapesComponent
  },
  {
    path: 'd3-selecting', component: D3SelectingComponent
  },
  {
    path: 'd3-data-binding', component: D3DataBindingComponent
  },
  {
    path: 'd3-scales', component: D3ScalesComponent
  },
  {
    path: 'd3-axis', component: D3AxisComponent
  },
  {
    path: 'd3-bar-chart', component: D3BarChartComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
