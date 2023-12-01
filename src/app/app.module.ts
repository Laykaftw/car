import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchByMakerComponent } from './Search-by-maker/Search-by-maker.component';
import { SearchByNameComponent } from './Search-by-name/Search-by-name.component';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    AddCarComponent,
    UpdateCarComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchByMakerComponent,
    SearchByNameComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
