import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maker } from '../model/maker.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent {
  newCar = new Car();
  maker!: Maker[];
  newIdmaker!: number;
  newmaker!: Maker;

  constructor(private CarService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.CarService.listemakers().subscribe((makrs)=>{
      this.maker = makrs._embedded.makers;
      console.log(makrs);
    })
  }

  addCar() {
    if (!this.maker || this.maker.length === 0) {
      console.error("Types are not yet loaded. Please wait.");
      return;
    }
  }
}
