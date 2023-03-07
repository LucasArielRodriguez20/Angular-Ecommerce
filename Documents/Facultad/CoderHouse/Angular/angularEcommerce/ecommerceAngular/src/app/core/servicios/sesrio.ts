import{Usuario} from './interfaces/usuario'
export interface Sesion{
    activa:boolean;
    usuario?:Usuario;
}