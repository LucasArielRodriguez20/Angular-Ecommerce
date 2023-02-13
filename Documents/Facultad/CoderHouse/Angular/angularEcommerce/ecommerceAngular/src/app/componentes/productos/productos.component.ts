import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listaDeProductos:Producto[]=[
    {nombre:'jabon',descripcion:'artefacto de uso de limpieza',precio:60,departamento:'Limpieza',imagen:'./imagenes/jabonSeiseme.jpg'},
    {nombre:'Arvejas',descripcion:'arvejas envasada x200g',precio:20,departamento:'Enlatados',imagen:'./imagenes/ArvejasInca.webp'},
    {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
    {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
    {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
    {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
    {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'}
  ];
  comprar(){
  console.log("producto agregado al carrito");
  }
}
