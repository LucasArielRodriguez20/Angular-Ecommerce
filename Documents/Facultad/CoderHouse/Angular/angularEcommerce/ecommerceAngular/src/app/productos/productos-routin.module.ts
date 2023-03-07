import { NgModule } from '@angular/core';
import { Route,RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './componentes/compras/compras.component';
import { ProductosComponent } from './componentes/productos/productos.component';


const routes : Routes =[
    {path:'Compras/RevisionDeProductos',component:ProductosComponent},
    {path:'Compras',component:ComprasComponent}
];

//{path:'RevisionDeProductos', children:[{path:'RevisionDeProductos', component:ProductosComponent},]},ejemplo rutas hijas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }