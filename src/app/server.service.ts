import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpUrl : HttpClient) { }

  sendData(url :string,data? :any){
    
    this.httpUrl.post(url,data).subscribe();
  }
  
   /*  */
  deleteData (isbn: number) {
    const url = `http://localhost:9000/deleteItem/${isbn}`; // DELETE object which has the isbn entered
    return this.httpUrl.delete(url).toPromise();
      
  }
}
