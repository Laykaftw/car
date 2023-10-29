import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
})
export class AddCarComponent {
  newCar = new Car();
  categorie!: Categorie[];
  newIdCat!: number;
  newcategorie!: Categorie;

  constructor(private CarService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.categorie = this.CarService.listeCategories();
  }

  addCar() {
    // console.log(this.newCar);
    this.newcategorie=this.CarService.consulterCategorie(this.newIdCat);
    this.newCar.categorie=this.newcategorie;
    this.CarService.ajouterCar(this.newCar), this.router.navigate(['cars']);
  }
}
