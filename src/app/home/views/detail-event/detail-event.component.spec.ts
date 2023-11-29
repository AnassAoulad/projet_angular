import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DetailEventComponent } from './detail-event.component'

describe('DetailEventComponent', () => {
	let component: DetailEventComponent
	let fixture: ComponentFixture<DetailEventComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DetailEventComponent]
		})
		fixture = TestBed.createComponent(DetailEventComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
