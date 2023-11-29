import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { DetailEventComponent } from './views/detail-event/detail-event.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: '', component: DashboardComponent },
			{ path: 'event/:id', component: DetailEventComponent }
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}