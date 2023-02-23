import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto';
@Pipe({
  name: 'pipeFiltro'
})
export class PipeFiltroPipe implements PipeTransform {

  transform(productos:Producto[], filtro:string): Producto[] {
   /*  var listaResult:Producto[] = productos.filter(p=>p.nombre.toLowerCase().includes(filtro.toLocaleLowerCase()));
    return listaResult; */
    if(filtro == ''){
      console.log("estoy en el filtro",filtro);
      return productos
    }
    else{
      console.log("estoy en el filtro",filtro);
      return productos.filter((p)=>{return p.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())});
    }
  }
}

