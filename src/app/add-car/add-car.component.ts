import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent {
  newCar= new Car();
  constructor(private CarService : CarService,
              private router : Router){ }

  addCar(){
    // console.log(this.newCar);
    this.CarService.ajouterCar(this.newCar),
    this.router.navigate(['cars'])
  }

}
