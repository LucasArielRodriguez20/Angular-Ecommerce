import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormControl } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios.-routing.module';
import { ServiceUsuariosService } from './service-usuarios.service';
import { MaterialModule } from '../modulos/material/material.module';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaCuentaComponent } from './componentes/nueva-cuenta/nueva-cuenta.component';


@NgModule({
  declarations: [
    LoginComponent,
    NuevaCuentaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsuariosRoutingModule,
    MaterialModule
  ],
  providers:[ServiceUsuariosService],

})
export class UsuariosModule { }
