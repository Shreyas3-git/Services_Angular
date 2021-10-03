import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  arr : any[] ;
  constructor() { }


  getData()
  {
     return   {
         id:1,
         product:"Laptop",
         price:70000
       }
  }
}
