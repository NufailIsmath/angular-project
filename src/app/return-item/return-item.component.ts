import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-return-item',
  templateUrl: './return-item.component.html',
  styleUrls: ['./return-item.component.css']
})
export class ReturnItemComponent implements OnInit {
  isbn: number = null;
  readername: string = '';
  date:string = null;
  constructor(private server : ServerService) { }

  ngOnInit() {
  }
  returnItem(){
    let data = {
      "isbn":this.isbn,
      "readername":this.readername,
      "date":this.date
    }
    this.server.sendData("http://localhost:9000/returnItem",data);
    console.log("Item Returned");
  }
}
