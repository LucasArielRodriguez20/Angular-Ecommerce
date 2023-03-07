import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ServicioTrapasoService } from 'src/app/productos/servicios/servicio-trapaso.service';
import { filter, from, map, Observable, of, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UsuarioSesionService } from 'src/app/core/servicios/usuario-sesion.service';
import { Sesion } from 'src/app/core/servicios/sesrio';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  listaProductosObs!:Observable<Producto[]>
  listaDeProductos!:Producto[];
  carritoCompra:Producto[]=[];

 /*  suscriptor!: Subscription;
  filtro: string = '';
  departamentos = new FormControl('');
  departamentosLista!: string[];
 */

  constructor(private router :Router,
              private productosData:ServicioTrapasoService,
              private sesion :UsuarioSesionService
     ){}

  ngOnInit(): void {
    this.listaProductosObs=this.productosData.obtenerProductosObsv();
  }

  comprar(item:Producto){
    this.carritoCompra.push(item);
    console.log("Total del carrito ",this.carritoCompra.map(p=>p.precio).reduce((a, b) => a + b, 0))
  }
}
