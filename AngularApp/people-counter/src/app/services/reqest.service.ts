import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {DetectionData} from "../api/detection-data";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  detectionDataURL = 'http://localhost:5000/predicitons'


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } ),responseType: 'text' as 'json'
  };

  getConfig() {
    return this.http.get<DetectionData>(this.detectionDataURL);
  }

  getTestString() {
    return this.http.get(this.detectionDataURL, this.httpOptions);
  }

}
