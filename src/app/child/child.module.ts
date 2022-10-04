import { NgModule } from '@angular/core';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChildComponent],
  imports: [SharedModule, ChildRoutingModule],
})
export class ChildModule {}
