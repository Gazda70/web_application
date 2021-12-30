import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {DashComponent} from "./dash/dash.component";
import { StoreSessionsChartComponent } from './charts/detection_statistics-chart/store-sessions-chart.component';

const routes: Routes = [
  { path: 'start', component: StartScreenComponent },
  { path: 'statistics', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
