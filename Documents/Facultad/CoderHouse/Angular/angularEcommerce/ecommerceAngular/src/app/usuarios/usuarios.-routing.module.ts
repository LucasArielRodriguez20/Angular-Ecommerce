import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';



const routes : Routes =[
    {path:'MiCuenta',component:LoginComponent}
];
//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }