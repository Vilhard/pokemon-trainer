import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TrainerPokemonListComponent } from './components/trainer-pokemon-list/trainer-pokemon-list.component';
import { TrainerPokemonListItemComponent } from './components/trainer-pokemon-list-item/trainer-pokemon-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CataloguePage,
    NavBarComponent,
    TrainerPokemonListComponent,
    TrainerPokemonListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
