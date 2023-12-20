import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  even = new EventEmitter<number>;
}
