import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: [],
})
export class RechercheParNomComponent implements OnInit{
  Cars !: Car[];
  nomcar!: string
  constructor(private carService : CarService) {}

  ngOnInit(): void {
    this.Cars = this.carService.listeCars(); 
  }
  
  rechercherCars() {
    this.Cars=this.carService.rechercherParNom(this.nomcar)
  }
}
