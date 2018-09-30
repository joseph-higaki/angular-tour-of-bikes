import { Component, OnInit } from '@angular/core';
import {Bike} from '../bike'; 
import {BIKES} from '../mock-bikes'; 

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bicicletas = BIKES;
  selectedBike: Bike;

  onSelectBike(bike: Bike) : void {
    this.selectedBike = bike; 
    console.log(this.selectedBike);
  }

  constructor() { }

  ngOnInit() {
  }

}
