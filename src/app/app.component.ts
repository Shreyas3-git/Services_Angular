import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngClass-trail';
  parent : string = "Hello from parent component";
  childData : string;
  constructor(){

  }

  ngOnInit($event)
  {
      this.childData = $event;
  }

  getData($event)
  {
    console.log($event);
  }
}
