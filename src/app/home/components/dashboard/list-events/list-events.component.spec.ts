import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListEventsComponent } from './list-events.component'

describe('ListEventsComponent', () => {
	let component: ListEventsComponent
	let fixture: ComponentFixture<ListEventsComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ListEventsComponent]
		})
		fixture = TestBed.createComponent(ListEventsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
