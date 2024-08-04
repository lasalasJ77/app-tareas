import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaListComponent } from './pages/tarea-list/tarea-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TareaListComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule,
    FormsModule
  ]
})
export class TareaModule { }
