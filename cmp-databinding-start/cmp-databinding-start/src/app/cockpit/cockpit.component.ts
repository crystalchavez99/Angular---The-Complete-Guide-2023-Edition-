import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;
  constructor(){

  }
  onAddServer(nameInput) {
    console.log(nameInput.value)
   this.serverCreated.emit(
    {
      // serverName: this.newServerName,
      // local reference v
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    }
    )
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({serverName: nameInput.value,  serverContent: this.serverContentInput.nativeElement.value})
  }
}
