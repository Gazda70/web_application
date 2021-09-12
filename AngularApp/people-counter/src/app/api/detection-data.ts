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


export interface DetectionData{
  networkType:string,
  objThreshold:number,
  iouThreshold:number,
  startDay:string,
  endDay:string,
  startTime:string,
  endTime:string
  totalDetections: DiscreteDetection[]
}


