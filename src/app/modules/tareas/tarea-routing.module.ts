import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListComponent } from './pages/tarea-list/tarea-list.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : 'tareas',component : TareaListComponent},
      {path : '**', redirectTo : 'tareas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRoutingModule { }
