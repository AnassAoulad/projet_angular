import { Component, OnInit } from '@angular/core'
import { DocumentData, QuerySnapshot } from 'firebase/firestore'
import { Evenement } from 'src/app/core/models/event.model'
import { FirebaseService } from 'src/app/core/services/firebase.service'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

	public editMode: boolean = false

	public eventCollectiondata: any = []
	public event: Evenement = {name: '', description: '', id:'', id_dj: '', id_traiteur: '', id_photographe:'', lieu: ''}

	constructor(private firebaseService: FirebaseService){}

	ngOnInit(): void {
		this.get()
		this.firebaseService.obsr_UpdatedSnapshotEvent.subscribe((snapshot) => {
			this.updateEventCollection(snapshot)
		})
	}

	async get() {
		const snapshot = await this.firebaseService.getEvents()
		this.updateEventCollection(snapshot)
	}

	public updateEventCollection(snapshot: QuerySnapshot<DocumentData>) {
		this.eventCollectiondata = []
		snapshot.docs.forEach((student) => {
			this.eventCollectiondata.push({ ...student.data(), id: student.id })
		})
	}

	async createEvent(){
		await this.firebaseService.createEvent(this.event)
		this.cancelForm()
	}

	async updateEvent(event: Evenement){
		await this.firebaseService.updateEvent(event)
	}

	async deleteEvent(id: string){
		await this.firebaseService.deleteEvent(id)
	}

	public cancelForm(){
		this.event.name = ''
		this.event.description= ''
		this.editMode = false
	}

}
