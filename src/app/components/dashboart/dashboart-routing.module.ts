import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboartComponent } from './dashboart.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path:'', component:DashboartComponent, children:[
    {path:'', component: InicioComponent},
    {path:'usuarios', component : UsuariosComponent},
    {path:'reportes', component : ReportesComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboartRoutingModule { }
