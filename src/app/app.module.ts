import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { HomeModule } from './home/home.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { LoginComponent } from './authentification/login/login.component'
import { RegisterComponent } from './authentification/register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment'
import { MatInputModule } from '@angular/material/input'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
	],
	imports: [
		MatInputModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		HomeModule,
		BrowserAnimationsModule,
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore())
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
