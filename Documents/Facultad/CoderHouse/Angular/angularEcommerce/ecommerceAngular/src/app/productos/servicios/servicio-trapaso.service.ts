import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable()
export class ServicioTrapasoService {
 private observableProductos!: BehaviorSubject<Producto[]>;
 private listaDeProductos:Producto[]=[
  {nombre:'jabon',descripcion:'artefacto de uso de limpieza',precio:60,departamento:'Limpieza',imagen:'./imagenes/jabonSeiseme.jpg'},
  {nombre:'Arvejas',descripcion:'arvejas envasada x200g',precio:20,departamento:'Enlatados',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'},
  {nombre:'Laysx400g',descripcion:'Papas Fritasx400g',precio:500,departamento:'Frituras',imagen:'./imagenes/ArvejasInca.webp'}
];
  constructor() { this.observableProductos=new BehaviorSubject(this.listaDeProductos); }
 /*  obtenerProductos():Promise<Producto[]>{
    return new Promise((resolve, reject)=>{
      if(this.listaDeProductos.length>0){
          resolve(this.listaDeProductos);
      }else{
        reject([]);
      }
    })
  } */
  eliminar(item:Producto){
    const listaAux = this.listaDeProductos.filter(p=>p!=item);
    this.listaDeProductos=listaAux;
    this.observableProductos.next(this.listaDeProductos)
  }
  crearProducto(item:Producto){
    if(this.listaDeProductos.includes(item)){
        alert("El Producto ya existe");
    }
    else{
      this.listaDeProductos.push(item);
      this.observableProductos.next(this.listaDeProductos);
    }
  }
  obtenerProductosObsv():Observable<Producto[]>{
    return this.observableProductos.asObservable()
  }
  obtenerLista(){return this.listaDeProductos}
}
