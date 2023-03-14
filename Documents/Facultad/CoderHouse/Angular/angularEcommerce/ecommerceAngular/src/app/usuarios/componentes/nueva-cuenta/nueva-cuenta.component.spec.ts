import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/modulos/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NuevaCuentaComponent } from './nueva-cuenta.component';

describe('NuevaCuentaComponent', () => {
  let component: NuevaCuentaComponent;
  let fixture: ComponentFixture<NuevaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MaterialModule,ReactiveFormsModule],
      declarations: [ NuevaCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it ('Componente creado correctamente',()=>{
    const component =TestBed.createComponent(NuevaCuentaComponent);
    const nuevaCuenta=component.componentInstance;
    expect(nuevaCuenta).toBeTruthy();
  });

  it('prueba de invalidez del formulario', () => {
    const formulario =component.formulario;
    const email =formulario.controls["email"];
    email.setValue('lucas');
    expect(formulario.valid).toBeFalse();
  });

  it('prueba formulario con un nuevo ingreso',()=>{
    const formulario =component.formulario;
    const nombre =formulario.controls["nombre"];
    const apellido =formulario.controls["apellido"];
    const email =formulario.controls["email"];
    const contrasena =formulario.controls["contrasena"];

    nombre.setValue('lucas');
    apellido.setValue('rodriguez');
    email.setValue('rodriguezlucas@gmail.com');
    contrasena.setValue('123456789');

    expect(formulario.valid).toBeTrue();
  });
});
