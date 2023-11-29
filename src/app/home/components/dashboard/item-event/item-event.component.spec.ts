import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ItemEventComponent } from './item-event.component'

describe('ItemEventComponent', () => {
	let component: ItemEventComponent
	let fixture: ComponentFixture<ItemEventComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ItemEventComponent]
		})
		fixture = TestBed.createComponent(ItemEventComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
