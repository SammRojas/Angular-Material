import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboartRoutingModule } from './dashboart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboartComponent } from './dashboart.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboartComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboartRoutingModule,
    SharedModule,
    

  ]
})
export class DashboartModule { }
