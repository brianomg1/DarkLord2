import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './Registrar.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarPageRoutingModule {}
