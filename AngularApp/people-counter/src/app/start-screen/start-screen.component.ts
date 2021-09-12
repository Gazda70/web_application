import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ConfigService} from "../services/reqest.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DetectionData, DetectionState} from "../api/detection-data";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit, OnChanges {

  neuralNetworksAvailable:string[] = []
  neuralNetworkChosen = '';
  isDetecting:boolean = false;
  endTime:string = '';

 /* time: number = 0;
  display: any;
  interval: any;

  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }*/


  constructor(startTime: ElementRef, endTime: ElementRef, private configService:ConfigService, private formBuilder: FormBuilder) {
    this.neuralNetworksAvailable.push("GazdaWitekLipka Detector");
    this.neuralNetworksAvailable.push("SSD Mobilenetv2 Detector");
    this.neuralNetworksAvailable.push("YOLO Tiny v2 Detector");
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.configService.getDetectionState().subscribe(
      {
        next: (value => {
          if(value == "true"){
            this.isDetecting = true;
          }
          console.log("Is detection: " + value);
        })
      }
    )
  }

  ngOnInit(): void {
    console.log("Start");
  }

  detect(){
    /*console.log("start "  + this.startTime.nativeElement.value);
    console.log("end "  + this.endTime.nativeElement.value);*/
    //console.log("start "  + this.startTime);
    console.log("end "  + this.endTime);

    /*console.log("startTimeForm "  + this.startTimeForm.get('name')?.value);
    console.log("endTimeForm "  + this.endTimeForm.get('name')?.value);*/

    this.configService.setupNewDetection('', this.endTime,
      this.neuralNetworkChosen, 0.3, 0.1).subscribe(
      {
        next: (value => {console.log("Response: " + value['startDay']);})
      }
    )
  }

  setChosenNeuralNetwork(neuralNetworkName:string){
    this.neuralNetworkChosen = neuralNetworkName;
  }

  validateDetectionSetup(){
    if(this.endTime != '' && this.neuralNetworkChosen != '') {
      this.isDetecting = true;
      this.detect();
    }else{
      window.alert("You didnt't fill out all necessary forms to start detecting !")
    }
  }
}
