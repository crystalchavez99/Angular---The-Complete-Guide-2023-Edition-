import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onIntervalNumber(number){
    console.log(number)
  }
  // number = 0;


  // grabEven(event:number){
  //   if(event % 2 === 0){
  //     this.number = event;
  //   }
  // }
  // grabOdd(event:number){
  //   if(event % 2 === 1){
  //     this.number = event;
  //   }
  // }
}
