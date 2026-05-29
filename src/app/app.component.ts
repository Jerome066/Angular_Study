import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";

@Component({
  selector: 'app-root', //nombre de la plantilla que vamos a usar
  imports: [RouterOutlet, NuevoComponenteComponent], //Permite el cambio de rutas dentro de la palicación
  templateUrl: './app.component.html', //Define el codigo HTML
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Moi';
}
