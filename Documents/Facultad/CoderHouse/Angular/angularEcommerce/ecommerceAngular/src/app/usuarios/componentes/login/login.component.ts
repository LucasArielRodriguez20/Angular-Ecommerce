import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/servicios/sesrio';
import { UsuarioSesionService } from 'src/app/core/servicios/usuario-sesion.service';
import { Usuario } from '../../interfaces/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario!:FormGroup;

    constructor(private sesion : UsuarioSesionService,private router:Router){
      
    
    }
  ngOnInit():void{
  let controles:any={
        contrasena:new FormControl('',[Validators.required,Validators.minLength(5)]),
        email:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]||[a-z]+[0-9]+@[a-z]+\\.[a-z]{2,3}$')]),
        sesion:new FormControl(false,[])
      }
      this.formulario=new FormGroup(controles);
  }
 
  log(){
    let usuario:Usuario={email:this.formulario.value.email,contrasena:this.formulario.value.contrasena}
    let sesion2:Sesion={activa:true,usuario:usuario}
    this.sesion.crearSeseion(sesion2);
    this.router.navigate(['productos/Compras'])
  }
}
