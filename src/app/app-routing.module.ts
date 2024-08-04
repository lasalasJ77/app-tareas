import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "tareas",
    loadChildren : ()=>import('./modules/tareas/tarea.module').then((m)=> m.TareaModule)
  },
  { path: '**', redirectTo: 'tareas' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
