import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  constructor(private server : ServerService ) { }

  ngOnInit() {
  }
  generateReport(){
    const url ='http://localhost:9000/generateReport';
    this.server.sendData(url);
    console.log("Report is printed in the backend console!!!")
  }
}
