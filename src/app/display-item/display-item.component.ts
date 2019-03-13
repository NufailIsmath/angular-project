import { Component, OnInit ,Inject} from '@angular/core';
import { ServerService } from 'src/app/server.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {
  
  public apps : Application[];
  constructor(private server : ServerService , private httpUrl:HttpClient) { }

  displayItem(){
    const url ='http://localhost:9000/displayItem';
     this.httpUrl.get(url).subscribe(result => {
        (data)=>{console.log(data)}
        this.apps = result as Application [];
        }
      );
      console.log("Item Displayed");    
  }
  ngOnInit() {
  }
}
interface Application{
  isbn: number ;
  objectType : string;
  title : string;
}
