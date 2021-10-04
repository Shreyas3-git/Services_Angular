import { Component, Input,Output,EventEmitter,OnInit} from '@angular/core';


@Component({
  selector: 'app-child',
    templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
  title = 'app-child';
  @Input()
  child : string;
  viewMessage : string;
  isCheck : boolean = false;

  @Output() Childsender : EventEmitter<string> = new EventEmitter();
  outputString : string = "Hello from Child component";

  constructor()
  {

  }
  ngOnInit()
  {
    this.viewMessage = this.child;
    console.log(this.child);
  }

  sendData()
  {
      this.Childsender.emit(this.outputString);
  }

  onClick() : void {
      this.isCheck = true;
  }
}
