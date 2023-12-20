import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{
  @Input() number;
  intervalId;
  constructor() {

  }
  ngOnInit(){

  }
  emitNumberSecond(){
    this.intervalId=setInterval(() =>{
      this.number+=1
    }, 1000)
  }
  stopEmits(){
    clearInterval(this.intervalId)
  }
}
