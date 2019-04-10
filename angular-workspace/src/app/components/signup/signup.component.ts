import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    usernames:string[];
    loggedin:boolean;
    constructor() { }

    ngOnInit() {
        this.usernames=[];
        this.loggedin = false;
  }
  addUser(newuser){
      const regex = /^[a-z/A-Z][a-z/A-Z/\-/_/./0-9]{5}[a-z/A-Z/\-/_/\./0-9]*$/;
      //const regex = /[a-z]/;
      var passes = regex.test(newuser)
      if(passes==false){
          alert('Username does not meet specs');
      }
      else if(newuser.length>20){
          alert('Username is too long');
      }
      else if(this.usernames.indexOf(newuser)!=-1){
          alert('Username is taken');
      }
      else{
          this.usernames.unshift(newuser);
          alert('Username has been created')
      }
      return false;
  }
  login(user){
      console.log(user)
      if(this.usernames.indexOf(user)==-1){
          alert('Username not found')
      }
      else{
          this.loggedin=true;
      }
  }

}
