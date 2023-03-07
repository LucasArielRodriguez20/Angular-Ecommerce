import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component'
import {LoginComponent} from './usuarios/componentes/login/login.component'
import { MaterialModule } from './modulos/material/material.module';
import {ServicioTrapasoService } from './productos/servicios/servicio-trapaso.service';
import { AppRoutingModule } from './app-routing.module';
import { ComponenteNotFoundComponent } from './componentes/componente-not-found/componente-not-found.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ComponenteNotFoundComponent,
        InicioComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
