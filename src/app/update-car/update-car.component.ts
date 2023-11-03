import { Component } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { maker } from '../model/maker.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [],
})
export class UpdateCarComponent {
  currentCar = new Car();
  makers!: maker[];
  updatedCatId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.makers = this.carService.listemakers();
    this.currentCar = this.carService.consulterCar(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentCar.maker.idCat;
    // console.log(this.currentCar);
  }
  updateCar() {
    // console.log(this.currentCar);
    this.currentCar.maker = this.carService.consultermaker(
      this.updatedCatId
    );
    this.carService.updateCar(this.currentCar), this.router.navigate(['cars']);
  }
}
