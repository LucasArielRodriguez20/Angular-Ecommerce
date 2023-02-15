import { Injectable } from '@angular/core';
import { ProductosComponent } from '../componentes/productos/productos.component';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioTrapasoService {
 private listaDeProductos:Producto[]=[
  {nombre:'jabon',descripcion:'artefacto de uso de limpieza',precio:60,departamento:'Limpieza',imagen:'./imagenes/jabonSeiseme.jpg'},
  {nombre:'Arvejas',descripcion:'arvejas envasada x200g',precio:20,departamento:'Enlatados',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'}
];
  constructor() { }
  /* obtenerProductos():Producto[]{
    return this.listaDeProductos;
  } */
 /*  ngOnInit():void{

  } */
  obtenerProductos():Promise<Producto[]>{
    return new Promise((resolve, reject)=>{
      if(this.listaDeProductos.length>0){
          resolve(this.listaDeProductos);
      }else{
        reject([]);
      }
    })
  }
  eliminar(item:Producto){
    const listaAux = this.listaDeProductos.filter(p=>p!=item);
    this.listaDeProductos=listaAux;
  }
  crearProducto(item:Producto){
    this.listaDeProductos.push(item);
    //this.controladorProducto.crearProducto();
    console.log(this.listaDeProductos)
  }
}
