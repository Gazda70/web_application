import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DetectionService } from '../services/reqest.service';
import {DetectionTime, DetectionDate} from "../api/detection-data";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  //detectionData = [{id:1, date:'29.11.2021', neuralNetwork:'SSD Mobilenet v2 320x320', status:'ongoing', numberOfPeopleDetected:'not known'}]

  constructor(private breakpointObserver: BreakpointObserver,
    private detectionService:DetectionService) { 
  }

  selectedDate:string = '';

  detectionData: any;

  people_max = 'people_max';

  people_min = 'people_min';

  people_avg = 'people_avg';

  day_summary = 'day_summary';

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  onDateSelected() {
    if(this.selectedDate != ''){
    this.detectionService.getDetectionStatisticsForSingleDay(this.formatDate(this.selectedDate),
     "single_day")
      .subscribe(
        (data) => {
          console.log(data); 
          this.detectionData = data;
        }
      );
    }
  }
  formatDate(date:string):DetectionDate{
    const dateElements = String(date).split(" ");
    console.log("day:dateElements[2]: " + dateElements[2]);
    console.log("month:dateElements[1]: " + dateElements[1]);
    console.log("year:dateElements[3]: " + dateElements[3]);
     return {
       day:dateElements[2],
       month:dateElements[1],
       year:dateElements[3]
     }
  }

}
