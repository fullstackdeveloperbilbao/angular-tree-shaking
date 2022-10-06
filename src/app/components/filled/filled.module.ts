import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilledComponent } from './filled.component';



@NgModule({
  declarations: [
    FilledComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FilledComponent]
})
export class FilledModule { }
