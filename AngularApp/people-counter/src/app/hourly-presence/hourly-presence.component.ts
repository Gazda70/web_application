import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {DetectionService} from "../services/reqest.service";
import {DetectionData} from "../api/detection-data";

@Component({
  selector: 'app-hourly-presence',
  templateUrl: './hourly-presence.component.html',
  styleUrls: ['./hourly-presence.component.css']
})
export class HourlyPresenceComponent implements OnInit {

  constructor(private detectionService:DetectionService) { }

  detectionData:DetectionData[] = [];

  testString:string = 'Not obtained test string from server !';


  getDetectionData() {
    this.detectionService.getDetectionStatistics()
      .subscribe(
        (data) => {console.log(data)}
      );
  }


  ngOnInit(): void {
    this.getDetectionData();
  }

  title = 'Angular Charts';

  view: [number, number] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  //pie
  showLabels = true;

  // data goes here
  public single = [
    {
      "name": "Monday",
      "value": 2243772
    },
    {
      "name": "Tuesday",
      "value": 1126000
    },
    {
      "name": "Wednesday",
      "value": 296215
    },
    {
      "name": "Thursday",
      "value": 257363
    },
    {
      "name": "Friday",
      "value": 196750
    },
    {
      "name": "Saturday",
      "value": 204617
    },
    {
      "name": "Sunday",
      "value": 45678
    }
  ];

  public multi = [
    {
      "name": "China",
      "series": [
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2017",
          "value": 1227770
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2017",
          "value": 764666
        }
      ]
    },

    {
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    },

    {
      "name": "Japan",
      "series": [
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2017",
          "value": 205350
        }
      ]
    },

    {
      "name": "Germany",
      "series": [
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2017",
          "value": 129246
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2017",
          "value": 149797
        }
      ]
    }
  ];


  onSelect($event: any) {

  }
}
