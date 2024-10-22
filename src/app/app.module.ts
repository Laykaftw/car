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
<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
=======
import { PieceComponent } from './piece/piece.component';
import { AddpieceComponent } from './add-piece/add-piece.component';

>>>>>>> 046d346a52bc09addddc14fe612e867c3740f088

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
    SearchFilterPipe,
<<<<<<< HEAD
=======
    PieceComponent,
    AddpieceComponent
>>>>>>> 046d346a52bc09addddc14fe612e867c3740f088
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
