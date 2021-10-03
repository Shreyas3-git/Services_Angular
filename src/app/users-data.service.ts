import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  arr : any[] ;
  constructor(private httpService: HttpClient) {   }


  getData()
  {


     return   {
         id:1,
         product:"Laptop",
         price:70000
       }
  }

  setUrl()
  {
    let url = "http://jsonplaceholder.typicode.com/todos/";
    return this.httpService.get(url);
  }
}
