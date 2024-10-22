import { Component } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './Cars.component.html',
})
export class CarsComponent {
  cars: Car[] | undefined; // Changed to lowercase 'cars' for consistency

  constructor(private carService: CarService, public authService: AuthService) {
    this.chargerCars();
  }

  chargerCars() {
    this.carService.listeCars().subscribe(
      (cars) => {
        this.cars = cars; // Update the cars array
      },
      (error: HttpErrorResponse) => {
        // Handle errors, e.g., display an error message
        if (error.status === 403) {
          console.error('Access forbidden: You do not have permission to view this resource.', error);
          alert('You do not have permission to view this resource.');
        } else {
          console.error('An error occurred while fetching cars:', error);
        }
      }
    );
  }

  supprimercars(car: Car) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.carService.supprimerCar(car.idCar!).subscribe(
        () => {
          console.log('Car deleted successfully');
          this.chargerCars(); // Reload the list after deletion
        },
        (error: HttpErrorResponse) => {
          console.error('Error deleting car:', error);
          alert('An error occurred while deleting the car. Please try again.');
        }
      );
    }
  }
}
