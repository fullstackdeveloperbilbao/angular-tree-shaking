import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chil2RoutingModule } from './chil2-routing.module';
import { Chil2Component } from './chil2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Chil2Component],
  imports: [CommonModule, Chil2RoutingModule, SharedModule],
})
export class Chil2Module {}
