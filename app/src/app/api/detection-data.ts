export interface DetectedObject {
  objectClass:string,
  objectClassConfidence:number,
  boundingBoxIOU:number
}

export interface DetectionState {
  isOngoing:string
}


export interface DiscreteDetection{
  detections:DetectedObject[],
  detectionDay:string,
  detectionTime:string
}


export interface DetectionRequest{
  networkType:string,
  objThreshold:number,
  startDate:DetectionDate,
  endDate:DetectionDate,
  startTime:DetectionTime,
  endTime:DetectionTime
}

export interface DetectionDate{
  year:string,
  month:string,
  day:string,
}

export interface DetectionTime{
  hour:string,
  minute:string,
  halfOfDay:string
}

export interface DetectionDataResponse{
  timestamp:string,
  secondsOfDetection:string,
  detections:any[],
  numberOfDetections:string
}

export interface DetectionDataRequest{
  dates:string[],
  mode:string
}

