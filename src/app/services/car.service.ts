import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Car } from '../model/car.model';
import { Maker } from '../model/maker.model';
import { MakerWrapped } from '../model/makerWrapped.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiURLTyp: string = 'http://localhost:8090/Cars/mkr';
  apiURL: string = 'http://localhost:8090/Cars/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Helper function to get JWT token and create headers
  private createAuthHeaders(): HttpHeaders {
    let jwt = this.authService.getToken();
    if (jwt) {
      return new HttpHeaders({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      });
    } else {
      console.error('JWT token is undefined');
      return new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }
  }

  listeCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL + '/all');
  }

  ajouterCar(c: Car): Observable<Car> {
    return this.http.post<Car>(this.apiURL + '/add-car', c, {
      headers: this.createAuthHeaders(),
    });
  }

  supprimerCar(id: number): Observable<void> {
    const url = `${this.apiURL}/delcar/${id}`;
    return this.http.delete<void>(url, {
      headers: this.createAuthHeaders(),
    });
  }

  consulterCar(id: number): Observable<Car> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Car>(url, {
      headers: this.createAuthHeaders(),
    });
  }

  updateCar(c: Car): Observable<Car> {
    return this.http.put<Car>(this.apiURL + '/update-car', c, {
      headers: this.createAuthHeaders(),
    });
  }

  listemakers(): Observable<MakerWrapped> {
    return this.http.get<MakerWrapped>(this.apiURLTyp, {
      headers: this.createAuthHeaders(),
    });
  }

  rechercherParMaker(idmake: number): Observable<Car[]> {
    const url = `${this.apiURL}/car-by-maker/${idmake}`;
    return this.http.get<Car[]>(url, {
      headers: this.createAuthHeaders(),
    });
  }

  rechercherParNom(nom: string): Observable<Car[]> {
    const url = `${this.apiURL}/carByNodel/${nom}`;
    return this.http.get<Car[]>(url, {
      headers: this.createAuthHeaders(),
    });
  }

  ajouterType(mak: Maker): Observable<Maker> {
    return this.http.post<Maker>(this.apiURLTyp, mak, {
      headers: this.createAuthHeaders(),
    });
  }
}
