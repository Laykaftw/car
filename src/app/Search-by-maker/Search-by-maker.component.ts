import { Component, OnInit } from '@angular/core';
import { Maker } from '../model/maker.model';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './search-by-maker.component.html',
})
export class SearchByMakerComponent implements OnInit {
  cars: Car[] = [];
  Maker!: Maker[];
  IdMaker!: number;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.listemakers().subscribe((makrs) => {
      this.Maker = makrs._embedded.makers;
      console.log(makrs);
    });

    this.loadallcars();
  }
  private loadallcars(): void {
    this.carService.listeCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
  onChange(): void {
    if (this.IdMaker) {
      this.carService.rechercherParMaker(this.IdMaker).subscribe((makr) => {
        this.cars = makr;
      });
    }
  }
}
