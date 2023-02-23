import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/componentes/productos/productos.component';
import { ComponenteNotFoundComponent } from './componentes/componente-not-found/componente-not-found.component';
import { LoginComponent } from './usuarios/componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ComprasComponent } from './productos/componentes/compras/compras.component';

const routes : Routes =[
  {path:'Compras/RevisionDeProductos', component:ProductosComponent}, 
  {path:'Compras', component:ComprasComponent},
  {path:'MiCuenta', component:LoginComponent},
  {path:'inicio',component:InicioComponent},
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:'**', component:ComponenteNotFoundComponent},
];
//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
