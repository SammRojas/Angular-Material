import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboartRoutingModule } from './dashboart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboartComponent } from './dashboart.component';


@NgModule({
  declarations: [
    DashboartComponent
  ],
  imports: [
    CommonModule,
    DashboartRoutingModule,
    SharedModule
  ]
})
export class DashboartModule { }
