import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaCuentaComponent } from './componentes/nueva-cuenta/nueva-cuenta.component';



const routes : Routes =[
    {path:'MiCuenta',component:LoginComponent},
    {path:'MiCuenta/NuevaCuenta',component:NuevaCuentaComponent}
];
//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }