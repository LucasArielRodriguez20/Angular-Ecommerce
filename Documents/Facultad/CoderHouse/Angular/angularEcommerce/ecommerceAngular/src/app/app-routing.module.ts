import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/componentes/productos/productos.component';
import { ComponenteNotFoundComponent } from './componentes/componente-not-found/componente-not-found.component';
import { LoginComponent } from './usuarios/componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ComprasComponent } from './productos/componentes/compras/compras.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes : Routes =[ 
  {path:'productos',canLoad:[SesionGuard], canActivate:[SesionGuard],loadChildren:()=>import('./productos/productos.module').then((modulo)=>modulo.ProductosModule)},
  {path:'usuarios', loadChildren:()=>import('./usuarios/usuarios.module').then((modulo)=>modulo.UsuariosModule)},
  {path:'inicio',component:InicioComponent},
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', component:ComponenteNotFoundComponent},
];
//loadChildren:()=>import('./productos/productos.module').then((modulo)=>modulo.ProductosModule)}
//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
