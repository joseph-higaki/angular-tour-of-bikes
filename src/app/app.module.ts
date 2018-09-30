import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
