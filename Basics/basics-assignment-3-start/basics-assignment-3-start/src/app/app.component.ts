import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // phrase = "Secret Password = tuna";
  toggle = false;
  tracker = 0;
  logs = [this.tracker]
  displayToggle(){
    this.toggle = !this.toggle;
    this.tracker += 1;
    this.logs.push(this.tracker)
    // if(this.toggle){
    //   this.phrase = ""
    // }else{
    //   this.phrase = "Secret Password = tuna";
    // }
  }
  style5LogAfter(){
    if(this.tracker >= 5){
      return "blue"
    }
  }
}
