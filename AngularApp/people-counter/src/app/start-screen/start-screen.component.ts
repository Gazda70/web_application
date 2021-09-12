import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "../services/reqest.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DetectionData} from "../api/detection-data";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {
  /*
  public startTimeForm:FormGroup;

  public endTimeForm:FormGroup;*/

  neuralNetworksAvailable:string[] = []
  neuralNetworkChosen = '';
  isDetecting:boolean = false;
  startTime:string = '';
  endTime:string = '';

  /*@ViewChild('start', {static: true}) startTime: ElementRef;
  @ViewChild('end', {static: true}) endTime: ElementRef;*/


  constructor(startTime: ElementRef, endTime: ElementRef, private configService:ConfigService, private formBuilder: FormBuilder) {
    /*this.startTime = startTime;
    this.endTime = endTime;*/
    /*
    this.startTimeForm = this.formBuilder.group({
      name: ''
    });
    this.endTimeForm = this.formBuilder.group({
      name: ''
    });*/
    this.neuralNetworksAvailable.push("GazdaWitekLipka Detector");
    this.neuralNetworksAvailable.push("SSD Mobilenetv2 Detector");
    this.neuralNetworksAvailable.push("YOLO Tiny v2 Detector");
  }

  ngOnInit(): void {
  }

  detect(){
    /*console.log("start "  + this.startTime.nativeElement.value);
    console.log("end "  + this.endTime.nativeElement.value);*/
    console.log("start "  + this.startTime);
    console.log("end "  + this.endTime);

    /*console.log("startTimeForm "  + this.startTimeForm.get('name')?.value);
    console.log("endTimeForm "  + this.endTimeForm.get('name')?.value);*/

    this.configService.setupNewDetection(this.startTime, this.endTime).subscribe(
      {
        next: (value => {console.log("Response: " + value as DetectionData['startDay']);})
      }
    )
  }

  setChosenNeuralNetwork(neuralNetworkName:string){
    this.neuralNetworkChosen = neuralNetworkName;
  }

  validateDetectionSetup(){
    if(this.startTime != '' && this.endTime != '' && this.neuralNetworkChosen != '') {
      this.isDetecting = true;
      this.detect();
    }
  }
  setupNewDetection(){
    /*console.log("endTime: " + endTime);
    console.log("startTime: " + startTime);*/
    this.configService.setupNewDetection("halo", "witam").subscribe(
      {
        next: (value => {console.log("Response: " + value);})
      }
    )
  }
}
