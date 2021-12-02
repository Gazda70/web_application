import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DetectionDate } from 'src/app/api/detection-data';
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
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
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
      day:"24",
      month:"Nov",
      year:"2021"
    },{
      day:"25",
      month:"Nov",
      year:"2021"
    }, "period")
      .subscribe(
        (data) => {
          /*console.log(data); 
          this.detectionData = JSON.parse(data);
          this.initializePeopleNumberChartForDetectionPeriodsInGivenDate('');*/
        }
      );
  }

  initializePeopleNumberChartForDetectionPeriodsInGivenDate(date:string){
    let detDat = [];
    for(var i = 0; i < this.detectionData.length; i++) {
      detDat.push({
        "data": [],
        "label": this.detectionData[i]["secondsOfDetection"]
      })
  }
    this.barChartData = detDat
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
