import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboartComponent } from './dashboart.component';

const routes: Routes = [
  {path:'', component:DashboartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboartRoutingModule { }
