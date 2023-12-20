import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{
  number = 0;
  @Output() intervalNumber = new EventEmitter<Number>;
  // @Output() oddCreated = new EventEmitter<Number>;
  intervalId;
  constructor() {

  }
  ngOnInit(){

  }
  startGame(){
    this.intervalId=setInterval(() =>{
      this.intervalNumber.emit(this.number + 1);
      this.number+=1;
    }, 1000)
  }
  stopGame(){
    clearInterval(this.intervalId)
  }

  // sendEven(){
  //   console.log(this.number,"even")
  //   this.evenCreated.emit(this.number)
  // }
  // sendOdd(){
  //   console.log(this.number,"odd")

  //   this.oddCreated.emit(this.number)
  // }

}
