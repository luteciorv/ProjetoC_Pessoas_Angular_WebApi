import { CommonModule } from '@angular/common';
import { PessoasComponent } from './Componentes/pessoas/pessoas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Pessoas',
    component: PessoasComponent
  },
  {
    path: '',
    redirectTo: 'Pessoas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
