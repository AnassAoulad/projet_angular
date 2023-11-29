import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Evenement } from 'src/app/core/models/event.model'

@Component({
	selector: 'app-list-events',
	templateUrl: './list-events.component.html',
	styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent {
	@Input() events: Evenement[] = []
	@Output() onUpdate = new EventEmitter()
	@Output() onDelete = new EventEmitter()

	public updateEvent(event: Evenement) {
		this.onUpdate.emit(event)
	}

	public deleteEvent(id: string) {
		this.onDelete.emit(id)
	}
}
