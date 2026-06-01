import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { EncapsulamientoComponent  } from '../encapsulamiento/encapsulamiento.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent, EncapsulamientoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

}
