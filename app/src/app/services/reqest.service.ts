import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {DetectionDate,DetectionTime} from "../api/detection-data";

@Injectable()
export class DetectionService {
  constructor(private http: HttpClient) { }

  detectionDataURL = 'http://192.168.0.66:5000/predictions'

  detectionSetupURL = 'http://192.168.0.66:5000/setup'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } ),responseType: 'text' as 'json'
  };

  setupNewDetection(networkType:string,
                    objThreshold:number,
                    startDate:DetectionDate,
                    endDate:DetectionDate,
                    startTime:DetectionTime,
                    endTime:DetectionTime): Observable<any>{
      const body = {
        networkType:networkType,
        objThreshold:objThreshold,
        startDate:JSON.stringify(startDate),
        endDate:JSON.stringify(endDate),
        startTime:JSON.stringify(startTime),
        endTime:JSON.stringify(endTime)
      }
      return this.http.post(this.detectionSetupURL, body);
  }
  getDetectionStatisticsForSingleDay(startDate:DetectionDate,
    mode:string):Observable<any>{
   const body = {
     startDate:JSON.stringify(startDate),
     mode:mode
   }
   return this.http.post(this.detectionDataURL, body)
 }
}

