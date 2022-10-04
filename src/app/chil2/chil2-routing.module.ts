import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chil2Component } from './chil2.component';

const routes: Routes = [
  {
    path: '',
    component: Chil2Component,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chil2RoutingModule {}
