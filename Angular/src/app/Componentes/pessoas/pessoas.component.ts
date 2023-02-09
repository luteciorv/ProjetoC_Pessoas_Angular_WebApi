import { PessoasService } from './../../Services/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Model/Pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = "";

  pessoas : Pessoa[] = [];

  visibilidadeTabela: Boolean = true;
  visibilidadeFormulario: Boolean = false;

  constructor(private pessoasService : PessoasService) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }

  exibirFormularioCadastro(): void{
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });

    this.tituloFormulario = "Nova Pessoa";

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
  }

  recuperarTodos() : void {
    this.pessoasService.recuperarTodos().subscribe(resultado => {
      this.pessoas = resultado;
    });
  }

  cadastrar() : void{
    const pessoa : Pessoa = this.formulario.value;
    this.pessoasService.adicionar(pessoa).subscribe(resultado => {
      this.voltar();
      alert("Pessoa cadastrada com sucesso!");
      this.recuperarTodos();
    });
  }

  voltar() : void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
}
