import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  beers:string[];
  constructor() { }

  ngOnInit() {
      this.name='No Name';
      this.age= 0;
      this.email='nn@gmail.com'
      this.beers=['Stout', 'Porter', 'Amber'];
      this.address = {
          street: '0 main st',
          city: 'Boulder',
          state:'CO'
      }

  }
  onClick(){
      this.name="John Doe";
      this.email='johndoe@gmail.com'
      this.address.street='100 Pearl Street'
      this.age=23;
  }

  addBeer(beer){
      this.beers.unshift(beer)
      return false;
  }

  deleteBeer(beer){
      for(let i = 0; i <this.beers.length; i++){
          if(this.beers[i] == beer){
              this.beers.splice(i, 1)
          }
      }
  }


}

interface Address{
    street:string
    city:string
    state:string
}
