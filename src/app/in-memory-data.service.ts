import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Bike} from './bike';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

     const bikes = [
        {id:1, name: "devinci"},
        {id:2, name: "yt"},
        {id:3, name: "santa cruz"},
        {id:4, name: "transition"},
        {id:5, name: "specialized"},
        {id:6, name: "giant"},
        {id:7, name: "pivot"}
        ];  
    return {bikes};
    }

    
 // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
    genId(bikes: Bike[]): number {
        let bikeIds: number[] = bikes.map(bike => bike.id);
        let returnValue: number = 1;
        if (bikeIds.length > 0)
          return Math.max(...bikeIds) + 1;
        return returnValue;
        //return bikes.length > 0 ? Math.max(...bikes.map(hero => hero.id)) + 1 : 1;
    }
}