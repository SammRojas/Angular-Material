import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboartModule } from './components/dashboart/dashboart.module';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path:'dashboard', loadChildren:()=> import('./components/dashboart/dashboart.module').then(x=>x.DashboartModule)},//lazi loadin carga peresoza
  {path : 'login', component: LoginComponent},
  {path : '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
