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
  product : any;
  name : string ;
  constructor(private user:UsersDataService) 
  {
      console.warn(this.user.getData);
      let object = this.user.getData();
      this.name = object.name;
      console.error(this.name);
  }
  
}

