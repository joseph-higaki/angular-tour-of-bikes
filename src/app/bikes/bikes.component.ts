import { Component, OnInit } from '@angular/core';
import {Bike} from '../bike'; 

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
/*   let bike = new Bike();
  bike.id = 1;
  bike.name = "devinci"; */

  bike: Bike =  {
    id: 1,
    name: "devinci"
  };

  constructor() { }

  ngOnInit() {
  }

}
