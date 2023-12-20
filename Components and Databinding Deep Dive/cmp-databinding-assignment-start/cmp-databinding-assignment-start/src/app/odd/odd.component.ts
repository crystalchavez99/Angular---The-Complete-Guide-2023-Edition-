import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent implements OnInit{
  @Input() number: Number;

  ngOnInit(): void {

  }

}
