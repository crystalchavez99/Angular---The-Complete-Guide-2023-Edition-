import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameIsValid = false;
  checkInput(){
    if(this.username){
      this.usernameIsValid = true
    }else{
      this.usernameIsValid = false;
    }
  }
  clearUsername(){
    this.username = '';
    this.usernameIsValid = false;
  }
}
