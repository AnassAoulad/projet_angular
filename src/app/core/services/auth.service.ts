import { Injectable } from '@angular/core'
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	UserCredential,
} from '@angular/fire/auth'
import { from, Observable } from 'rxjs'
import { FirebaseService } from './firebase.service'
import { Role } from '../models/user.model'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private auth: Auth, private firebaseService: FirebaseService) { }

	register(name: string, email: string, password: string, role: Role): Observable<UserCredential> {
		const request = createUserWithEmailAndPassword(this.auth, email, password)
		request.then(() => this.firebaseService.createUser({prenom: name, email: email, role: role}))
		return from(request)
	}

	login(email: string, password: string): Observable<any> {
		return from(signInWithEmailAndPassword(this.auth, email, password))
	}

	logout(): Observable<any> {
		return from(this.auth.signOut())
	}
}
