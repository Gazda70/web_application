import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./services/reqest.service";
import {DetectionData} from "./api/detection-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'people-counter';

  constructor(private configService:ConfigService) { }

  testString:string = 'Not obtained test string from server !';

  getTestString(){
    this.configService.getTestString().subscribe( (test:any) => {
      this.testString = test;
      console.log("test.text: " + test)
    });
  }

  ngOnInit(): void {
    //this.getTestString();
  }

}
