import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sturctural-directives';
  isCheck : boolean = false;
  product : any = [
      {
        id:1,
         name:"Laptop",
         price:70000
      },
      {
        id:2,
        name:"Mobie",
        price:20000
      },
      {
        id:3,
        name:"Car",
        price:7000000
      }
  ];
  productName : string;

  

  constructor(private user:UsersDataService) 
  {
      console.warn(this.user.getData);
      let object = this.user.getData();
      this.productName = object.product;
      console.error(this.productName);
  }

  getValues(value)
  {
      console.warn(value);
  }
  
  showMsg()
  {
      this.isCheck = true;
  } 
}

