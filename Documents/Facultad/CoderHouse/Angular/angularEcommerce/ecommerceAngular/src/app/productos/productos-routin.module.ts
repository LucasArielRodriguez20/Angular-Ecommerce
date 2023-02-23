import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';


const routes : Routes =[
    {path:'Compras/RevisionDeProductos',component:ProductosComponent}
];
//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }