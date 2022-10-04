import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: 'eager', component: EagerComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./child/child.module').then((m) => m.ChildModule),
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
