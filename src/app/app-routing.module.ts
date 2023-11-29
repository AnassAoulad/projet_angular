import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './authentification/login/login.component'
import { RegisterComponent } from './authentification/register/register.component'
import { HomePageComponent } from './home/views/home-page/home-page.component'
import {
	canActivate,
	redirectUnauthorizedTo,
} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home-page',
		pathMatch: 'full',
	},
	{
		path: 'home-page',
		component: HomePageComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
