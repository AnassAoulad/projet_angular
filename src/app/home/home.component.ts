import { Component } from '@angular/core'
import { AuthService } from '../core/services/auth.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

	constructor(
    private authService: AuthService,
    private router: Router
	) { }

	onLogoutClick(): void {
		this.authService.logout()
		this.router.navigate(['/login'])
	}

}
