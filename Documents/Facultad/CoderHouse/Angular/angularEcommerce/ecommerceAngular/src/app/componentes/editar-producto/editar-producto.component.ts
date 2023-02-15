import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Producto } from 'src/app/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/servicios/servicio-trapaso.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  formulario: FormGroup;
  constructor(private ref :MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Producto,private productosData:ServicioTrapasoService){
      this.formulario=new FormGroup({
        nombre : new FormControl(data.nombre),
        descripcion : new FormControl(data.descripcion),
        precio : new FormControl(data.precio),
        departamento : new FormControl(data.departamento),
        imagen : new FormControl(data.imagen)
      })
  }
  guardar(){
    var producto:Producto=this.formulario.value;
    this.productosData.crearProducto(producto);
    console.log(producto);
  }
  cancelar(){
  }
}

