import { NgModule } from '@angular/core';

import { Chil2RoutingModule } from './chil2-routing.module';
import { Chil2Component } from './chil2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Chil2Component],
  imports: [SharedModule, Chil2RoutingModule],
})
export class Chil2Module {}
