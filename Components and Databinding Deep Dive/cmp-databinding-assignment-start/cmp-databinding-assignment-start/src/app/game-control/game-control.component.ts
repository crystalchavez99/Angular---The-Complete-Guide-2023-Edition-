import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{
  @Input() number;
  constructor() {

  }
  ngOnInit(){

  }
}

