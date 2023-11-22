import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-Cars',
  templateUrl: './Cars.component.html',
})
export class CarsComponent {
  Cars : Car[] |undefined; //un tableau de Car
  constructor(private CarService: CarService,
              public authService: AuthService,) 
              {
  this.Cars = CarService.listeCars();
  
}
supprimerCar(c: Car)
{
  let conf=confirm("Are you sure ?")
  if (conf)
    this.CarService.supprimerCar(c);
  }

}
