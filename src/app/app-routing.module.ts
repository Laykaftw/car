import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { CarGuard } from './car.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'updateCar/:id', component: UpdateCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'add-car', component: AddCarComponent, canActivate: [CarGuard] },
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path :"rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
