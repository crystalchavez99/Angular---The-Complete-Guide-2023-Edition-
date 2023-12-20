import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  odd = new EventEmitter<number>;
}
