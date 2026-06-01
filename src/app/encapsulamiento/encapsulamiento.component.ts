import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento',
  imports: [],
  templateUrl: './encapsulamiento.component.html',
  styleUrl: './encapsulamiento.component.css'
})
export class EncapsulamientoComponent {
  private titulo = "Titulo encapsulamiento";

  get mostrarTitulo(){
    return this.titulo;
  }

  getTitulo(){
      return this.titulo
  }
}
