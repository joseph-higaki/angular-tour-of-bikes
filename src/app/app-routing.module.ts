import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent }  from './bikes/bikes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BikeDetailComponent }  from './bike-detail/bike-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'bike/:id', component: BikeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
