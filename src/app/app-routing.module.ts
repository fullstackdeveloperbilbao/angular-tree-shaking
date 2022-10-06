import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: 'eager', component: EagerComponent },
  {
    path: 'lazy1',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
  },
  {
    path: 'lazy2',
    loadChildren: () =>
      import('./chil2/chil2.module').then((m) => m.Chil2Module),
  },
  {
    path: 'lazy3',
    loadChildren: () =>
      import('./child3/child3.module').then((m) => m.Child3Module),
  },
  {
    path: '**',
    redirectTo: 'eager',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
