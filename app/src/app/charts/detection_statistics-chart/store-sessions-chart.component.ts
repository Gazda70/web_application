import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DetectionDate, DetectionStatistics } from 'src/app/api/detection-data';
import { DetectionService } from 'src/app/services/reqest.service';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css']
})
export class StoreSessionsChartComponent implements OnInit {

  constructor(private detectionService:DetectionService) { 
   this.getDetectionData();
  }

  detectionData:any = null;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  /*
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];*/

  public barChartData: ChartDataSets[] = [];

  getDetectionData() {
    this.detectionService.getDetectionStatistics({
      day:"05",
      month:"Dec",
      year:"2021"
    },{
      day:"06",
      month:"Dec",
      year:"2021"
    }, "period")
      .subscribe(
        (data) => {
          console.log(data); 
          this.detectionData = data;

          this.initializePeopleNumberChartForDetectionPeriodsInGivenDate();
        }
      );
  }

  initializePeopleNumberChartForDetectionPeriodsInGivenDate(){
    console.log("this.detectionData[detection_period_stats]");
    console.log(this.detectionData["detection_period_stats"])
    let stats = this.detectionData["detection_period_stats"]
    for (var i = 0;  i < stats.length; i ++){
      this.barChartData = [{data: [stats[i]["people_min"]], label:"Minimal people count"},
      {data: [stats[i]["people_max"]], label:"Maximal people count"}]
      this.barChartLabels = [stats[i]["start_time"]]
    }
  }

  /*formatDate(date:string):DetectionDate{
    const dateElements = String(date).split(" ");
    console.log("day:dateElements[2]: " + dateElements[2]);
    console.log("month:dateElements[1]: " + dateElements[1]);
    console.log("year:dateElements[3]: " + dateElements[3]);
     return {
       day:dateElements[2],
       month:dateElements[1],
       year:dateElements[3]
     }
  }*/

  ngOnInit() {
  }

}
