import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../servicios/sesrio';
import { UsuarioSesionService } from '../servicios/usuario-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private sesion:UsuarioSesionService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(map((sesion:Sesion)=>{
      if(sesion.activa){return true}
      else{ 
        this.router.navigate(['usuarios/MiCuenta']);
        return false
      }
    })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(map((sesion:Sesion)=>{
        if(sesion.activa){return true}
        else{ 
          this.router.navigate(['usuarios/MiCuenta']);
          return false
        }
      })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(map((sesion:Sesion)=>{
        if(sesion.activa){return true}
        else{ 
          this.router.navigate(['usuarios/MiCuenta']);
          return false
        }
      })
      );
  }
}
