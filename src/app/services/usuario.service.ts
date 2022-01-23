import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},  
    {usuario : 'Rmaria', nombre: 'Maria', apellido: 'rojas', sexo: 'Femenino'},
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'jperez', nombre: 'Samuel', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'Rmaria', nombre: 'Maria', apellido: 'rojas', sexo: 'Femenino'},
    {usuario : 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario : 'jperez', nombre: 'Harvey', apellido: 'Perez', sexo: 'Masculino'},
  ]

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice()
  }
  deleteUser(index:number){
    this.listUsuarios.splice(index,1); 
    console.log(this.listUsuarios);
  }
}
