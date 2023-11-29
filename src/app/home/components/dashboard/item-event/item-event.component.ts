import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Evenement } from 'src/app/core/models/event.model'

@Component({
	selector: 'app-item-event',
	templateUrl: './item-event.component.html',
	styleUrls: ['./item-event.component.scss']
})
export class ItemEventComponent {

	@Input() event: Partial<Evenement> = {}
	@Output() onUpdate = new EventEmitter()
	@Output() onDelete = new EventEmitter()

	constructor(private router: Router) {

	}

	public editMode: boolean = false

	public updateEvent() {
		this.onUpdate.emit(this.event)
		this.editMode = false
	}

	public deleteEvent() {
		this.onDelete.emit(this.event.id)
	}

	public detailEvent() {
		this.router.navigateByUrl('event/' + this.event.id)
	}
}
