import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/productos/servicios/servicio-trapaso.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  formulario: FormGroup;
  constructor(private ref :MatDialogRef<CrearProductoComponent>,private productosData:ServicioTrapasoService,private route:Router){
      this.formulario=new FormGroup({
        nombre : new FormControl(),
        descripcion : new FormControl(),
        precio : new FormControl(),
        departamento : new FormControl(),
        imagen : new FormControl()
      })
  }
  guardar(){
    this.productosData.crearProducto(this.formulario.value).subscribe(()=>{this.route.navigate(['productos/Compras'])});
    this.ref.close();
  }
  cancelar(){
    this.ref.close();
  }
}
