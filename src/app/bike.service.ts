import { Injectable } from '@angular/core';
import {Bike} from './bike';
import {BIKES} from './mock-bikes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private messageService: MessageService) { }

  getBikes(): Observable<Bike[]> {
    // TODO: send the message _after_ fetching the bikes
    this.messageService.add('BikeService: fetched bikes');
    return of(BIKES);
  }
}
