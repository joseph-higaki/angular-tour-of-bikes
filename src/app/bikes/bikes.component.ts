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
  //selectedBike: Bike;

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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bikeService.addBike({ name } as Bike)
      .subscribe(hero => {
        this.bikes.push(hero);
      });
  }

  delete(bike: Bike): void {
    this.bikes = this.bikes.filter(b => b !== bike);
    this.bikeService.deleteBike(bike).subscribe();
  }

}
