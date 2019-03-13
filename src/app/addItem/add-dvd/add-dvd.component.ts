import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';


@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDVDComponent implements OnInit {
  isbn: number = null;
  title: string = '';
  date : string;
  language: string = '';
  subtitle: string = '';
  producer: string = '';
  actor: string = '';
  constructor(private server : ServerService) {}

  ngOnInit() {
  }

  send(){
    let data = {"isbn":this.isbn,"title":this.title,"date":this.date,"language":this.language,"subtitle":this.subtitle,
    "producer":this.producer,"actor":this.actor}
    this.server.sendData("http://localhost:9000/addDVD",data);
    alert("Successfully Added DVD");
    console.log("DVD Added. The ISBN Number :"+this.isbn);
  }
}
