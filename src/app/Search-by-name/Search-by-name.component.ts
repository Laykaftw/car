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
  allcars!: Car[];
  constructor(private carService : CarService) {}

  ngOnInit(): void {
    // this.cars = this.carService.listecars();
    this.loadallcars();
  }

  private loadallcars(): void {
    this.carService.listeCars
    ().subscribe((cars) => {
      this.Cars = cars;
    });
  }
  
  recherchercrs() {
    this.carService
      .rechercherParNom(this.nomcar)
      .subscribe((crs) => {
        this.Cars = crs;
      });
  }
  onKeyUp(filterText: string) {
    this.Cars = this.allcars.filter((item) =>
      item.nomCar!.toLowerCase().includes(filterText)
    );
  }
}
