import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/interfaces/producto';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { CrearProductoComponent } from '../crear-producto/crear-producto.component';
import { ServicioTrapasoService } from 'src/app/servicios/servicio-trapaso.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  filtro: string = '';
  listaDeProductos!:Producto[];
  carritoCompra:Producto[]=[];
  constructor(private dialog :MatDialog,private dialogEmpty :MatDialog,private productosData:ServicioTrapasoService){
  }
  ngOnInit(): void {
    this.productosData.obtenerProductosObsv().subscribe((p:Producto[])=>{this.listaDeProductos=p})
  }
  comprar(item:Producto){
    this.carritoCompra.push(item);
    console.log("Total del carrito ",this.carritoCompra.map(p=>p.precio).reduce((a, b) => a + b, 0))
  }
  eliminar(item:Producto){
    const listaAux = this.listaDeProductos.filter(p=>p!=item);
    this.listaDeProductos=listaAux;
    this.productosData.eliminar(item);
  }
  modificar(item:Producto){
    const dialog = this.dialog.open(EditarProductoComponent,{data:item});
  }
  crearProductoDialog(){
    const dialog2 = this.dialogEmpty.open(CrearProductoComponent);
  }
  crearProducto(){
    this.productosData.obtenerProductosObsv().subscribe((p:Producto[])=>{this.listaDeProductos=p});
  }
}
