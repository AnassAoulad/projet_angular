import { NgModule } from '@angular/core'
import {MatFormFieldModule} from '@angular/material/form-field' 
import {MatSelectModule} from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'


const materialModules: any[] = [MatFormFieldModule, MatSelectModule, MatButtonModule,MatIconModule,MatTooltipModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,
	MatGridListModule, MatInputModule, MatToolbarModule
]

@NgModule({
	imports: [...materialModules],
	exports: [...materialModules],
})

export class MaterialModule { }
