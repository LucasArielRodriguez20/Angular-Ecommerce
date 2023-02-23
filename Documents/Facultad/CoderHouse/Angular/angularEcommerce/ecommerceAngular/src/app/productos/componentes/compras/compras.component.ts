import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/productos/servicios/servicio-trapaso.service';
import { filter, from, map, Observable, of, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  listaProductosObs!:Observable<Producto[]>
  suscriptor!: Subscription;
  filtro: string = '';
  listaDeProductos!:Producto[];
  carritoCompra:Producto[]=[];
  departamentos = new FormControl('');
  departamentosLista!: string[];


  constructor(private productosData:ServicioTrapasoService){
  }
  ngOnInit(): void {
    this.suscriptor=this.productosData.obtenerProductosObsv().subscribe((p:Producto[])=>{this.listaDeProductos=p})
    this.listaProductosObs=this.productosData.obtenerProductosObsv();
    this.listaProductosObs.subscribe((p:Producto[])=>{this.listaDeProductos=p});
    this.departamentosLista= this.productosData.obtenerLista().map(p=>p.departamento);
  }
  ngOnDestroy(): void {
    this.suscriptor.unsubscribe();
  }

  comprar(item:Producto){
    this.carritoCompra.push(item);
    console.log("Total del carrito ",this.carritoCompra.map(p=>p.precio).reduce((a, b) => a + b, 0))
  }
}
