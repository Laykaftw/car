import { Component } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [],
})
export class UpdateCarComponent {
  currentCar = new Car();
  categories!: Categorie[];
  updatedCatId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.categories = this.carService.listeCategories();
    this.currentCar = this.carService.consulterCar(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentCar.categorie.idCat;
    // console.log(this.currentCar);
  }
  updateCar() {
    // console.log(this.currentCar);
    this.currentCar.categorie = this.carService.consulterCategorie(
      this.updatedCatId
    );
    this.carService.updateCar(this.currentCar), this.router.navigate(['cars']);
  }
}
