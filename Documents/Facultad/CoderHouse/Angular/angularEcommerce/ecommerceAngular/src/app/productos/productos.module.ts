import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './componentes/productos/productos.component';
import { MaterialModule } from '../modulos/material/material.module'; 
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import {ServicioTrapasoService } from './servicios/servicio-trapaso.service';
import { ComprasComponent } from './componentes/compras/compras.component';
import { PipeNuevoPipe } from './pipe/pipe-nuevo.pipe';
import { DirectivaExpDirective } from './directivas/directiva-exp.directive';
import { PipeFiltroPipe } from './pipe/pipe-filtro.pipe';
import { ReactiveFormsModule,Validators,FormsModule } from '@angular/forms';
import { ProductosRoutingModule } from './productos-routin.module';


@NgModule({
  declarations: [
    ProductosComponent,
    EditarProductoComponent,
    CrearProductoComponent,
    ComprasComponent,
    DirectivaExpDirective,
    PipeNuevoPipe,
    PipeFiltroPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ProductosRoutingModule,
  ],
  providers:[ServicioTrapasoService]
})
export class ProductosModule { }
