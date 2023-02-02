import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario:FormGroup;

  constructor(){
    let controles:any={
      nombre:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]||[a-z]{2,20}$')]),
      apellido:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]||[a-z]{2,20}$')]),
      contrasena:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]||[a-z]+[0-9]+@[a-z]+\\.[a-z]{2,3}$')]),
      sesion:new FormControl(false,[])
    }
    this.formulario=new FormGroup(controles);
   
  }
  crearUsuario(){
    console.log(this.formulario);
    alert("usuario Creado");
  }
}
