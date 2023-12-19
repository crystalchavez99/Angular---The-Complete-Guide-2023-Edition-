import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: '<p>Test</p><app-server></app-server><app-server></app-server>',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.'
  serverName = 'Test Server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
