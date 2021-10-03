import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sturctural-directives';
  isCheck : boolean = false;
  product : any;

  constructor() {
    this.product = [
      {
        "id":1001,
        "name":"Watch",
        "brand":"apple",
        "price":120000
      },
      {
        "id":1002,
        "name":"service",
        "brand":"titan",
        "price":3500
      },
      {
        "id":1003,
        "name":"blackparel",
        "brand":"rollex",
        "price":2000000
      }
    ];
  
  }
  showMsg() : void {
    this.isCheck = true;
  }

  getProductValue(val)
  {
      console.log(val.target.value);
  }
}
function showMsg() {
  throw new Error('Function not implemented.');
}

function getProductValue(val: any) {
  throw new Error('Function not implemented.');
}

