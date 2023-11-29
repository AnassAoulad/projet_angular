import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { ListEventsComponent } from './components/dashboard/list-events/list-events.component'
import { ItemEventComponent } from './components/dashboard/item-event/item-event.component'
import { FormsModule } from '@angular/forms'
import { DetailEventComponent } from './views/detail-event/detail-event.component'
import { ItemTaskComponent } from './components/detail-event/item-task/item-task.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
	declarations: [
		DashboardComponent, HomeComponent, ListEventsComponent, ItemEventComponent, DetailEventComponent, ItemTaskComponent
	],
	imports: [
		CommonModule, HomeRoutingModule, FormsModule, SharedModule,
	]
})
export class HomeModule { }
