import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SharedModule
  ]
})
export class ChildModule { }
