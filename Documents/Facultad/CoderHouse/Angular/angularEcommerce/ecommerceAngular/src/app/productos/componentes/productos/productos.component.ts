import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/productos/interfaces/producto';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { CrearProductoComponent } from '../crear-producto/crear-producto.component';
import { ServicioTrapasoService } from 'src/app/productos/servicios/servicio-trapaso.service';
import { filter, from, map, Observable, of, Subscription } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';
import { FormControl } from '@angular/forms';
import { PipeFiltroPipe } from '../../pipe/pipe-filtro.pipe';
import { ProductosModule } from '../../productos.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listaProductosObs!:Observable<Producto[]>
  listaDeProductos!:Producto[];

  /* departamentos = new FormControl('');
  departamentosLista!: string[];
  filtro: string = ''; */


  constructor(private dialog :MatDialog,
              private dialogEmpty :MatDialog,
              private productosData:ServicioTrapasoService){}

  ngOnInit(): void {
    this.listaProductosObs=this.productosData.obtenerProductosObsv();
  }

  eliminar(item:Producto){
    this.productosData.eliminar(item).subscribe(()=>{this.listaProductosObs=this.productosData.obtenerProductosObsv()});
    this.listaProductosObs=this.productosData.obtenerProductosObsv();
  }
  modificar(item:Producto){
    const dialog = this.dialog.open(EditarProductoComponent,{data:item});
  }
  crearProductoDialog(){
    const dialog2 = this.dialogEmpty.open(CrearProductoComponent);
  }
  /* departamentoFilter(){
    of(this.productosData.obtenerLista()).pipe(map(((p:Producto[])=>{return p.filter(a=>a.departamento == this.departamentos.value)}))).subscribe((p:Producto[])=>{console.log("of products",p)});
  } */

}
