import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup
  loading : boolean = false
  constructor(
    private fb : FormBuilder,
    private _snackBar: MatSnackBar,
    private router : Router
    ) {
    this.form = this.fb.group({
      user : ['',Validators.required],
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  ingresar():void{    
    const usuario = this.form.value.user
    const password  = this.form.value.password
    
    if(usuario =='jperez' && password == 'admin123'){
//dirigir al dashboard
  this.fakeLoading()

    }else{
      //mostrar un mensage de error
      this.error()
      this.form.reset()
    }
  }
  error():void{
    this._snackBar.open('metio mal el dedo','',{
      duration : 4000,
      horizontalPosition:'center',
    verticalPosition: 'bottom'
    })
  }
  fakeLoading():void{
    this.loading = true
    setTimeout(()=>{
      /* this.loading=false */
      this.router.navigate(['dashboard'])//se declara un objeto tipo Route y redirije a otro componente en este caso al dasboard
    },1000)
  }
}
