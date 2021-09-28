import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/login',
	},
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'trainer',
		component: TrainerPage
	},
	{
		path: 'catalogue',
		component: CataloguePage
	}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }