import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboartRoutingModule } from './dashboart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboartComponent } from './dashboart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';



@NgModule({
  declarations: [
    DashboartComponent,
    NavbarComponent,
    InicioComponent,
    UsuariosComponent,
    ReportesComponent,
    CrearUsuarioComponent
    
  ],
  imports: [
    CommonModule,
    DashboartRoutingModule,
    SharedModule,
  ]
})
export class DashboartModule { }
