import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/productos/servicios/servicio-trapaso.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  formulario: FormGroup;
  constructor(private ref :MatDialogRef<EditarProductoComponent>,
             @Inject(MAT_DIALOG_DATA) public data:Producto,
              private productosData:ServicioTrapasoService,
              private route:Router)
  {
      this.formulario=new FormGroup({
        id: new FormControl(data.id),
        nombre : new FormControl(data.nombre),
        descripcion : new FormControl(data.descripcion),
        precio : new FormControl(data.precio),
        departamento : new FormControl(data.departamento),
        imagen : new FormControl(data.imagen)
      })
  }
  guardar(){
    this.productosData.modificarProducto(this.formulario.value).subscribe(()=>{this.route.navigate(['productos/Compras'])});
    this.ref.close();
  }
  cancelar(){
    this.ref.close();
  }
}

