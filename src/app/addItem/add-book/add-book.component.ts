import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  isbn: number = null;
  title: string = null;
  date : string;
  Author: string = '';
  Publisher: string = '';
  numberofpages : number = null;
  constructor(private server:ServerService) {}
  ngOnInit() {
  }
  send(){
    
   let data = {"isbn":this.isbn,"title":this.title,"date":this.date,"author":this.Author,"publisher":this.Publisher,"number of pages":this.numberofpages}
    this.server.sendData("http://localhost:9000/addBook",data);
    alert("Successfully Added Book"); 
    console.log("Book Added. The ISBN Number :"+this.isbn);
  }
}
