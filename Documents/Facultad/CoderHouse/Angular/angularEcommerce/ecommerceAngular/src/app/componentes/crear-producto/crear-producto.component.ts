import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Producto } from 'src/app/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/servicios/servicio-trapaso.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  formulario: FormGroup;
  constructor(private ref :MatDialogRef<CrearProductoComponent>,private productosData:ServicioTrapasoService){
      this.formulario=new FormGroup({
        nombre : new FormControl(),
        descripcion : new FormControl(),
        precio : new FormControl(),
        departamento : new FormControl(),
        imagen : new FormControl()
      })
  }
  guardar(){
    this.productosData.crearProducto(this.formulario.value);
  }
  cancelar(){

  }
}
