import { Component, OnInit } from '@angular/core';
import {Bike} from '../bike'; 
import {BikeService} from '../bike.service'; 

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bikes: Bike[];
  selectedBike: Bike;

  onSelectBike(bike: Bike) : void {
    //this.selectedBike = bike; 
  //  console.log(this.selectedBike);
  }

  getBikes(): void{
    this.bikeService.getBikes()
      .subscribe(bikes => this.bikes = bikes);
  }

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

}
