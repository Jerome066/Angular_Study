import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  title = "Componente con interpolación";
  usuario = {
    nombre: 'Jorge',
    edad: 26
  };

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }
}
