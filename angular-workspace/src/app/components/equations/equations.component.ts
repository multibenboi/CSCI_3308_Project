import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equations',
  templateUrl: './equations.component.html',
  styleUrls: ['./equations.component.css']
})
export class EquationsComponent implements OnInit {
    
    alc: number = 0;
    ibu: number = 0;
    
    constructor() { }

    ngOnInit() {
        //initialize table for utilization
        //table for yeild of sugar
        //this.usernames=[];
        //this.login_info="Not logged in";
        
  }
  ABV(OG, FG){
    console.log(OG<FG);
    if (OG<FG){
        alert('Original Gravity must be greater than Final Gravity');
        
    }
    else{
        this.alc = 131.25*(OG-FG);
    }
    return false
  }

  IBU(W, A, V){
    this.ibu=W*0.231*A*1000/V
    return false
  }
    

  

  
  

}
