import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  Cars: Car[] ; // Initialize the Cars array

  constructor() {
    this.Cars = [
      { idCar: 1, nomCar: "BMW M5cs", CarHp: 635, prixCar: 150000, LaunchDate: new Date("01/03/2021") },
      { idCar: 2, nomCar: "Toyota Supra GR", CarHp: 382, prixCar: 60000, LaunchDate: new Date("01/05/2019") },
      { idCar: 3, nomCar: "Honda NSX", CarHp: 274, prixCar: 65000, LaunchDate: new Date("01/11/1990") },
    ];
  }

  listeCars(): Car[] {
    return this.Cars;
  }

  ajouterCar(c: Car) {
    this.Cars.push(c);
  }

  supprimerCar(c: Car) {
    const index = this.Cars.indexOf(c);
    if (index > -1) {
      this.Cars.splice(index, 1);
    }
  }

  consulterCar(id:number): Car{
    return this.Cars.find(p => p.idCar == id)!;
      }
  
  

  updateCar(p:Car)
    {
    // console.log(p);
    this.supprimerCar(p);
    this.ajouterCar(p);
    this.trierCars();
    }

  trierCars(){
    this.Cars = this.Cars.sort((n1,n2) => {
    if (n1.idCar > n2.idCar) {
      return 1;
    }
    if (n1.idCar < n2.idCar) {
      return -1;
    }
      return 0;
    });
    }

}