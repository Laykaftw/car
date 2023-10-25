import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';


const routes: Routes = [
  {path: "cars", component : CarsComponent},
  {path: "add-car", component : AddCarComponent},
  { path: "", redirectTo: "cars", pathMatch: "full" },
  {path: "updateCar/:id", component: UpdateCarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
