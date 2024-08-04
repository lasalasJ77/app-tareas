import { Component } from '@angular/core';
import { Tarea } from '../../../../shared/models/Tarea';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {

  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {

    // Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar el objeto tarea al array;
    this.listTareas.push(tarea);

    // Reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number,tarea: Tarea): void {
    this.listTareas[index].estado = !tarea.estado
  }

}
