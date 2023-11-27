import { Component, OnInit } from '@angular/core';
import { Maker } from '../model/maker.model';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: [],
})
export class RechercheParCategorieComponent implements OnInit {
  idmake!: number;
  Maker!: Maker[];
  Cars_filtred!: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.Cars_filtred = this.carService.listeCars(); 
    this.Maker = this.carService.listemakers();
  }

  onChange() {
    this.Cars_filtred = this.carService.rechercherParCategorie(this.idmake);
  }
}
