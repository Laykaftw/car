import { Component } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Maker } from '../model/maker.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
})
export class UpdateCarComponent {
  currentCar = new Car();
  makers!: Maker[];
  updatedmakerId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    // this.makers = this.carService.listemakers();
    // this.currentCar = this.carService.consulterCar(
    //   this.activatedRoute.snapshot.params['id']
    // );
    // this.updatedmakerId = this.currentCar.maker.idmaker;
    // console.log(this.currentCar);
    this.carService.listemakers().subscribe((makrs) => {
      this.makers = makrs._embedded.makers;
      console.log(makrs);
    });
    this.carService
      .consulterCar(this.activatedRoute.snapshot.params['id'])
      .subscribe((car) => {
        this.currentCar = car;
        this.updatedmakerId = this.currentCar.maker.idmaker;
      });
  }
  updateCar() {
    // console.log(this.currentCar);
    // this.currentCar.maker = this.carService.consultermaker(
    //   this.updatedmakerId
    // );
    // this.carService.updateCar(this.currentCar), this.router.navigate(['cars']);
    this.currentCar.maker = this.makers.find(
      (maker) => maker.idmaker == this.updatedmakerId
    )!;
    this.carService.updateCar(this.currentCar).subscribe((car) => {
      this.router.navigate(['Cars']);
    });
  }
}
