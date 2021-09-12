import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {DetectionData, DiscreteDetection} from "../api/detection-data";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  detectionDataURL = 'http://localhost:5000/predictions'

  detectionSetupURL = 'http://localhost:5000/setup'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } ),responseType: 'text' as 'json'
  };

  getConfig() {
    return this.http.get<DetectionData>(this.detectionDataURL);
  }

  setupNewDetection(startTime:string, endTime:string,
                    networkType:string, objThreshold:number,
                    iouThreshold:number): Observable<Object>{
      /*const body = JSON.stringify({'id':1, 'time': {'start': startTime, 'end': endTime}});
      console.log("body: ");
      console.log(body);*/
      const body: DetectionData = {
        networkType:networkType,
        objThreshold:objThreshold,
        iouThreshold:iouThreshold,
        startDay:"Monday",
        endDay:"Tuesday",
        startTime:startTime,
        endTime:endTime,
        totalDetections:[]
      }

      return this.http.post(this.detectionSetupURL, body);
  }

  getTestString() {
    return this.http.get(this.detectionDataURL, this.httpOptions);
  }

}

