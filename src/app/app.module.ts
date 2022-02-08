import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgShapesComponent } from './svg-shapes/svg-shapes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HighlightService } from './highlight.service';
import { PerformanceService } from './performance.service';
import { D3SelectingComponent } from './d3-selecting/d3-selecting.component';
import { D3DataBindingComponent } from './d3-data-binding/d3-data-binding.component';
import { ResourcesComponent } from './resources/resources.component';
import { D3ScalesComponent } from './d3-scales/d3-scales.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3AxisComponent } from './d3-axis/d3-axis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    SvgShapesComponent,
    D3DataBindingComponent,
    D3SelectingComponent,
    ResourcesComponent,
    D3ScalesComponent,
    D3BarChartComponent,
    D3AxisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [HighlightService, PerformanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
