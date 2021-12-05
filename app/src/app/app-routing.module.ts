import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HourlyPresenceComponent} from "./hourly-presence/hourly-presence.component";
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {DashComponent} from "./dash/dash.component";
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';

const routes: Routes = [
  { path: 'hourly-presence-component', component: HourlyPresenceComponent },
  { path: 'start-screen-component', component: StartScreenComponent },
  { path: 'statistics', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
