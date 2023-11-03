import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { maker } from '../model/maker.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent {
  newCar = new Car();
  maker!: maker[];
  newIdmaker!: number;
  newmaker!: maker;

  constructor(private CarService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.maker = this.CarService.listemakers();
  }

  addCar() {
    // console.log(this.newCar);
    this.newmaker=this.CarService.consultermaker(this.newIdmaker);
    this.newCar.maker=this.newmaker;
    this.CarService.ajouterCar(this.newCar), this.router.navigate(['cars']);
  }
}
