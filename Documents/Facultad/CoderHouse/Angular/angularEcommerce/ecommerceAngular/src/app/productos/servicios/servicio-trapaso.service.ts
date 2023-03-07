import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/enviroument/environment';
import { Producto } from '../interfaces/producto';

@Injectable()
export class ServicioTrapasoService {
  constructor(private http:HttpClient){}

  eliminar(item:Producto):Observable<Producto>{
    return this.http.delete<Producto>(`${env.apiUrl}/Productos/${item.id}`);
  }
  crearProducto(item:Producto):Observable<Producto>{
    return this.http.post<Producto>(`${env.apiUrl}/Productos`,item); 
  }
  obtenerProductosObsv():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${env.apiUrl}/Productos`);
  }
  modificarProducto(item:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${env.apiUrl}/Productos/${item.id}`,item);
  }

}
