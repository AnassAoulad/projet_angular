import { Component, OnInit } from '@angular/core'
import {
	AbstractControl,
	NonNullableFormBuilder,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../core/services/auth.service'
import { Role } from 'src/app/core/models/user.model'

export function passwordsMatchValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const password = control.get('password')?.value
		const confirmPassword = control.get('confirmPassword')?.value

		if (password && confirmPassword && password !== confirmPassword) {
			return { passwordsDontMatch: true }
		} else {
			return null
		}
	}
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

	public roles = Object.values(Role)

	registerForm = this.fb.group(
		{
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
			role: [Role.visiteur, Validators.required],
		},
		{ validators: passwordsMatchValidator() }
	)

	constructor(
		private authService: AuthService,
		private router: Router,
		private fb: NonNullableFormBuilder
	) { }

	ngOnInit(): void { }

	get email() {
		return this.registerForm.get('email')
	}

	get password() {
		return this.registerForm.get('password')
	}

	get confirmPassword() {
		return this.registerForm.get('confirmPassword')
	}

	get name() {
		return this.registerForm.get('name')
	}

	get role() {
		return this.registerForm.get('role')
	}

	submit() {
		const { name, email, password, role } = this.registerForm.value

		if (!this.registerForm.valid || !name || !password || !email || !role) {
			return
		}

		this.authService
			.register(name, email, password, role)
			.subscribe(() => {
				this.router.navigate(['/home'])
			})
	}
}
