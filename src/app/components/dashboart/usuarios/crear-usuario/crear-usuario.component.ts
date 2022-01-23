import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  sexo: any[] = ['Maculino','Femenino','X'];
  form : FormGroup
  constructor(
    private fb:FormBuilder,
    private _userSrevice : UsuarioService,
    private router : Router,
    private snackBar: MatSnackBar
  ) { 
    this.form = this.fb.group({
      usuario:['', Validators.required],
      nombre :['', Validators.required],
      apellido:['', Validators.required],
      sexo:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  addUer():void{
    /* console.log(this.form); */
    const user : Usuario = {
      usuario : this.form.value.usuario,
      nombre : this.form.value.nombre,
      apellido : this.form.value.apellido,
      sexo : this.form.value.sexo      
    }
    /* console.log(user); */
    this._userSrevice.addUser(user)
    this.message()
    this.router.navigate(['/dashboard/usuarios'])
  }
  message():void{
    this.snackBar.open('Usuario creado correctamente','',{
      duration : 4000,
      horizontalPosition:'center',
    verticalPosition: 'bottom'
    })
  }
}
