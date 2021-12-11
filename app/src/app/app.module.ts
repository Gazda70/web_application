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
import {DetectionService} from "./services/reqest.service";
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashComponent } from './dash/dash.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './card/card.component';
import {ChartsModule} from "ng2-charts";
import { StoreSessionsChartComponent } from './charts/detection_statistics-chart/store-sessions-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HourlyPresenceComponent,
    StartScreenComponent,
    DashComponent,
    NavComponent,
    CardComponent,
    StoreSessionsChartComponent,
    AnnualSalesChartComponent,
    SalesTrafficChartComponent,
    ProductSalesChartComponent,
    MiniCardComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DetectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
