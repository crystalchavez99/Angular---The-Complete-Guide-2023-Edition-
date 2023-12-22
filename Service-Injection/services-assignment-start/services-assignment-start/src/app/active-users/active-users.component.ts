import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent {
  @Input() users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
  constructor(private userService: UsersService){}
  onSetToInactive(id: number) {
    this.userService.setInactive(id)
    // this.userSetToInactive.emit(id);
  }
}
