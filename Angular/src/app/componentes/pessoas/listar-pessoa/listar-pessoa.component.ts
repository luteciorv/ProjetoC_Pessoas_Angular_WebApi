import { PessoasService } from './../../../services/pessoas.service';
import { IPessoa } from './../../../interfaces/IPessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
  pessoas : IPessoa[] = []

  constructor(private pessoasService : PessoasService){ }

  ngOnInit(): void {
    this.pessoasService.recuperarTodos().subscribe((pessoas) => {
      this.pessoas = pessoas
    });
  }

  editar() : void {

  }

  excluir() : void {

  }
}
