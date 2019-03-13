import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.css']
})
export class RemoveItemComponent implements OnInit {

  isbn: number = null;

  constructor(private server : ServerService) {}

  ngOnInit() {}

  async deleteItem(){
    try{
      await this.server.deleteData(this.isbn);
      console.log("Successfully removed the item with the isbn number of "+this.isbn);
    }catch(e){
      console.log(e);  
    }
  }
}
