import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourlyPresenceComponent } from './hourly-presence/hourly-presence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StartScreenComponent } from './start-screen/start-screen.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {ConfigService} from "./services/reqest.service";

@NgModule({
  declarations: [
    AppComponent,
    HourlyPresenceComponent,
    StartScreenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
