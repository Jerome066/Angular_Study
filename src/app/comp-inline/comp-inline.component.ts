import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-inline',
  //es Standalone (standalone: true,)
  imports: [],
  template: `
  <h1>{{title}}</h1>
    <p>
      comp-inline works!
    </p>
  `,
  styles: `
    h1{
      color: red;
    }
    p{
      font-size: 40px;
    }
  `
})
export class CompInlineComponent {
  title = 'Componente inline'
}
