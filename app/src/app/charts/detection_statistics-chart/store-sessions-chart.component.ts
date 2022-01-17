import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css']
})
export class StoreSessionsChartComponent{

  @Input() detectionData:any = null;

  @Input() dataType:string = ''

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'People number'
        },
        ticks: {
          beginAtZero:true,
          stepSize: 1,
        }
        }
    ]
  }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  ngOnChanges(){
    if(this.detectionData != null && this.dataType != ''){
      if(this.dataType=="day_summary"){
        this.initializeDaySummarizingChart();
      }else{
        this.initializePeopleNumberChartForDetectionPeriodsInGivenDate();
      }
    }
  }

  initializePeopleNumberChartForDetectionPeriodsInGivenDate(){
    let stats = this.detectionData["detection_period_stats"]
    var data = []
    for (var i = 0;  i < stats.length; i ++){
      data.push({data: [stats[i][this.dataType]],
        label: (stats[i]["start_time"] as string) + "-" + (stats[i]["end_time"] as string)});
    }
    this.barChartData = data;
  }

  initializeDaySummarizingChart(){
    let stats = this.detectionData["whole_day_stats"];
    this.barChartData = [{data:[stats["people_min"]], label:"Minimal people count"},
  {data:[stats["people_max"]], label:"Maximal people count"},
  {data:[stats["people_avg"]], label:"Average people count"}]
    }
}
