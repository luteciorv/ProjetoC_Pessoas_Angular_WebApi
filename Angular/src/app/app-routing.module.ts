import { ListarPessoaComponent } from './componentes/pessoas/listar-pessoa/listar-pessoa.component';
import { ExcluirPessoaComponent } from './componentes/pessoas/excluir-pessoa/excluir-pessoa.component';
import { AtualizarPessoaComponent } from './componentes/pessoas/atualizar-pessoa/atualizar-pessoa.component';
import { CriarPessoaComponent } from './componentes/pessoas/criar-pessoa/criar-pessoa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Pessoas',
    component: ListarPessoaComponent
  },
  {
    path: '',
    redirectTo: 'Pessoas',
    pathMatch: 'full'
  },
  {
    path: 'Pessoas/Cadastrar',
    component: CriarPessoaComponent
  },
  {
    path: 'Pessoas/Editar/:id',
    component: AtualizarPessoaComponent
  },
  {
    path: 'Pessoas/Apagar/:id',
    component: ExcluirPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
