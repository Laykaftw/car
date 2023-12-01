import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './Search-by-name.component.html',
  styleUrls: [],
})
export class SearchByNameComponent implements OnInit{
  Cars !: Car[];
  searchTerm !:string;
  nomcar!: string
  constructor(private carService : CarService) {}

  ngOnInit(): void {
    this.Cars = this.carService.listeCars(); 
  }
  
  rechercherCars() {
    this.Cars=this.carService.rechercherParNom(this.nomcar)
  }
}
