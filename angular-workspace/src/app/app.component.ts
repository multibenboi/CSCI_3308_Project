import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  loggedin = "Not logged in";
  //loggedin = false;
  //login_info="Not logged in"
}
