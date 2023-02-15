import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,Validators,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaDeProductosComponent } from './componentes/lista-de-productos/lista-de-productos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component'
import {LoginComponent} from './componentes/login/login.component'
import { MaterialModule } from './modulos/material/material.module';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { PipeNuevoPipe } from './pipe/pipe-nuevo.pipe';
import { DirectivaExpDirective } from './directivas/directiva-exp.directive';
import { PipeFiltroPipe } from './pipe/pipe-filtro.pipe';
import {ServicioTrapasoService } from './servicios/servicio-trapaso.service';
/* import { AppRoutingModule } from './app-routing.module'; */

@NgModule({
    declarations: [
        AppComponent,
        ListaDeProductosComponent,
        ProductosComponent,
        NavBarComponent,
        LoginComponent,
        EditarProductoComponent,
        CrearProductoComponent,
        PipeNuevoPipe,
        DirectivaExpDirective,
        PipeFiltroPipe,
    ],
    providers: [/* ServicioTrapasoService */ ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AppModule { }
