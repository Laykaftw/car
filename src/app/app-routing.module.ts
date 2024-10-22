import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { CarGuard } from './car.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchByMakerComponent } from './Search-by-maker/Search-by-maker.component';
import { SearchByNameComponent } from './Search-by-name/Search-by-name.component';
import { PieceComponent } from './piece/piece.component';
import { AddpieceComponent } from './add-piece/add-piece.component';


const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'updateCar/:id', component: UpdateCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'add-car', component: AddCarComponent, canActivate: [CarGuard] },
  {path: "searchbymaker", component : SearchByMakerComponent},
  {path :"searchbyname", component : SearchByNameComponent},
  {path :"piece",component :PieceComponent},
  {path :"add-piece", component:AddpieceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
