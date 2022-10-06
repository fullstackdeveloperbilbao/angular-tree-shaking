import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child3RoutingModule } from './child3-routing.module';
import { Child3Component } from './child3.component';

@NgModule({
  declarations: [Child3Component],
  imports: [
    CommonModule,
    Child3RoutingModule
  ],
  providers: [],
})
export class Child3Module {}
