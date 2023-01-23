import { Component } from '@angular/core';
import { estudiante } from 'src/app/estudiante';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
       array:estudiante[]=[
        {
          nombre:'juan'
        },
        {
          nombre:'maria'
        },
        {
          nombre:'carlos'
        },
        {
          nombre:'lalo'
        }
      ];
}
