import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-borrow-item',
  templateUrl: './borrow-item.component.html',
  styleUrls: ['./borrow-item.component.css']
})
export class BorrowItemComponent implements OnInit {
  isbn: number = null;
  readername: string = '';
  date:string = null;

  constructor(private server : ServerService) {} 
  ngOnInit() {}

  borrowItem(){
    let data = {
      "isbn":this.isbn,
      "readername":this.readername,
      "date":this.date
    }
    this.server.sendData("http://localhost:9000/borrowItem",data);
    console.log("Item Borrowed");
  }

}
