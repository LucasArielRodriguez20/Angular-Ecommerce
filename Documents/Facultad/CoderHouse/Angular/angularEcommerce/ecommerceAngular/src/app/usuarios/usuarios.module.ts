import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormControl } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios.-routing.module';
import { ServiceUsuariosService } from './service-usuarios.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsuariosRoutingModule
  ],
  providers:[ServiceUsuariosService],

})
export class UsuariosModule { }
