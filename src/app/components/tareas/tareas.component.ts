import { Component, OnInit} from '@angular/core';
import { Tareas } from '../../models/Tareas';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  listTareas: Tareas[]=[];
  nombreTarea='';

  constructor(){

  }

  agregarTarea(){
    console.log(this.nombreTarea);
    const tarea: Tareas={
      nombre: this.nombreTarea,
      estado:false 
    }
      this.listTareas.push(tarea);
      this.nombreTarea="";
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index,1);
  }

  actualizarTarea(tarea: Tareas, index: number){
    this.listTareas[index].estado=!tarea.estado;
  }

  StringOnInit():void{

  }
}
