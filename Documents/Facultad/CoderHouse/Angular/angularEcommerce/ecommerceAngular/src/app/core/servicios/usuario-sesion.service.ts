import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from './sesrio';

@Injectable({
  providedIn: 'root'
})
export class UsuarioSesionService {
  sesion$!:BehaviorSubject<Sesion>
  constructor() { 
    let sesion:Sesion={
      activa:false
    };
    this.sesion$= new BehaviorSubject<Sesion>(sesion);
  }
  obtenerSesion():Observable<Sesion>{
    return this.sesion$.asObservable();
  }
  crearSeseion(sesion:Sesion){
    this.sesion$.next(sesion);
    console.log("sesion creada",sesion);
  }
}
