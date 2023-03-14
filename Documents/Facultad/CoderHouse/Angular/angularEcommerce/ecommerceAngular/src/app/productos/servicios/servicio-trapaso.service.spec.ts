import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ServicioTrapasoService } from './servicio-trapaso.service';
import { of } from 'rxjs/internal/observable/of';

describe('ServicioTrapasoService', () => {
  let service: ServicioTrapasoService;
  let HttpClientSpy:{get: jasmine.Spy}
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    
    HttpClientSpy=jasmine.createSpyObj('HttpClient',['get']);
    service = new ServicioTrapasoService(HttpClientSpy as any);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('el servicio retorna ',(done:DoneFn)=>{
    const datos=[
      {
       "nombre": "Refined Cotton Cheese",
       "descripcion": "The Football Is Good For Training And Recreational Purposes",
       "precio": 222,
       "imagen": "imagen 2",
       "codigo": 3,
       "departamento": "Kids",
       "id": "2"
      },
      {
       "nombre": "Luxurious Rubber Computer",
       "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
       "precio": 71,
       "imagen": "imagen 3",
       "codigo": 97,
       "departamento": "Kids",
       "id": "3"
      },
      {
       "nombre": "Sleek Metal Sausages",
       "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
       "precio": 36,
       "imagen": "imagen 4",
       "codigo": 42,
       "departamento": "Music",
       "id": "4"
      },
      {
       "nombre": "Small Rubber Shoes",
       "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
       "precio": 55,
       "imagen": "imagen 5",
       "codigo": 38,
       "departamento": "Movies",
       "id": "5"
      },
      {
       "nombre": "Bespoke Steel Salad",
       "descripcion": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
       "precio": 12,
       "imagen": "imagen 6",
       "codigo": 79,
       "departamento": "Baby",
       "id": "6"
      },
      {
       "nombre": "Refined Steel Computer",
       "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
       "precio": 34,
       "imagen": "imagen 7",
       "codigo": 25,
       "departamento": "Home",
       "id": "7"
      },
      {
       "nombre": "Handcrafted Frozen Shirt",
       "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
       "precio": 33,
       "imagen": "imagen 8",
       "codigo": 82,
       "departamento": "Computers",
       "id": "8"
      }
     ];
    HttpClientSpy.get.and.returnValue(of(datos));
    service.obtenerProductosObsv().subscribe((productos)=>{
      const datos2=[
        {
         "nombre": "Refined Cotton Cheese",
         "descripcion": "The Football Is Good For Training And Recreational Purposes",
         "precio": 222,
         "imagen": "imagen 2",
         "codigo": 3,
         "departamento": "Kids",
         "id": "2"
        },
        {
         "nombre": "Luxurious Rubber Computer",
         "descripcion": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
         "precio": 71,
         "imagen": "imagen 3",
         "codigo": 97,
         "departamento": "Kids",
         "id": "3"
        },
        {
         "nombre": "Sleek Metal Sausages",
         "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
         "precio": 36,
         "imagen": "imagen 4",
         "codigo": 42,
         "departamento": "Music",
         "id": "4"
        },
        {
         "nombre": "Small Rubber Shoes",
         "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
         "precio": 55,
         "imagen": "imagen 5",
         "codigo": 38,
         "departamento": "Movies",
         "id": "5"
        },
        {
         "nombre": "Bespoke Steel Salad",
         "descripcion": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
         "precio": 12,
         "imagen": "imagen 6",
         "codigo": 79,
         "departamento": "Baby",
         "id": "6"
        },
        {
         "nombre": "Refined Steel Computer",
         "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
         "precio": 34,
         "imagen": "imagen 7",
         "codigo": 25,
         "departamento": "Home",
         "id": "7"
        },
        {
         "nombre": "Handcrafted Frozen Shirt",
         "descripcion": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
         "precio": 33,
         "imagen": "imagen 8",
         "codigo": 82,
         "departamento": "Computers",
         "id": "8"
        }
       ];
       expect(datos).toEqual(datos2);
       done();
    })
  });
});
