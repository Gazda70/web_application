import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DetectionService} from "../services/reqest.service";
import {DetectionTime, DetectionDate} from "../api/detection-data";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent {

  isDetecting:boolean = false;
  todayDate: Date = new Date();
  currentTime:string = '00:00';
  startDate:Date|undefined = undefined;
  startTime:string = '';
  endTime:string = '23:59';
  startTimeChosen:boolean = false;
  startDateChosen:boolean = false;

  onStartTimeChosen(){
    this.startTimeChosen = true;
  }

  onStartDateChosen(){
    console.log("this.startDate: " + this.startDate);
    console.log("this.todayDate: " + this.todayDate);
    if(this.startDate?.getDay() == this.todayDate.getDay()
    && this.startDate?.getMonth() == this.todayDate.getMonth()
    && this.startDate?.getFullYear() == this.todayDate.getFullYear()) {
      this.currentTime = this.todayDate.getHours() + ":" + this.todayDate.getMinutes();
      console.log("Current time: " + this.currentTime);
    }
    this.startDateChosen = true;
  }

  formatDate(date:Date):DetectionDate{
    const dateElements = String(date).split(" ");
     return {
       day:dateElements[2],
       month:dateElements[1],
       year:dateElements[3]
     }
  }

  formatTime(time:string):DetectionTime{
    const timeElements = String(time).split(" ");
    return {
        hour:this.changeHours(timeElements[0].split(':')[0], timeElements[1]),
        minute:timeElements[0].split(':')[1],
        halfOfDay:timeElements[1]
     }
  }

  changeHours(time:string, halfOfDay:string):string{
    if(halfOfDay=="PM"){
    switch(time){
        case "1": return "13";
        case "2": return "14";
        case "3": return "15";
        case "4": return "16";
        case "5": return "17";
        case "6": return "18";
        case "7": return "19";
        case "8": return "20";
        case "9": return "21";
        case "10": return "22";
        case "11": return "23";
    }
  }
    return time;
  }



  constructor(private detectionService:DetectionService) {
    this.todayDate = new Date();
  }

  detect(){
    if(this.startDate != null && this.startTime != '' && this.endTime != ''){
      this.isDetecting = true;
      this.detectionService.setupNewDetection(  "SSD Mobilenet v2 320x320",
        0.2,
        this.formatDate(this.startDate),
        this.formatDate(this.startDate),
        this.formatTime(this.startTime),
        this.formatTime(this.endTime)).subscribe(
        {
          next: (value => {console.log("Response: " + value);})
        }
      )
      this.onDetectionRequestSubmitted();
    }else{
      alert("You didn't fill out all necessary forms!");
    }
  }

  onDetectionRequestSubmitted(){
    alert("Detection request submitted!");
    this.startTimeChosen = false;
    this.startDateChosen = false;
    this.startDate = this.todayDate;
    this.startTime = '';
    this.endTime = '23:59';
  }
}
