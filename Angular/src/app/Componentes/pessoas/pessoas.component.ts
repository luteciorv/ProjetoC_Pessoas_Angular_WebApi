import { PessoasService } from './../../Services/pessoas.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Model/Pessoa';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  nomePessoa : string = "";
  id : number = 0;
  modalRef : BsModalRef = new BsModalRef;

  constructor(
    private pessoasService : PessoasService,
    private modalService : BsModalService) { }

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

  exibirFormularioEdicao(id: number): void{
    this.pessoasService.recuperarPeloId(id).subscribe(pessoa =>{
      this.formulario = new FormGroup({
        nome: new FormControl(pessoa.nome),
        sobrenome: new FormControl(pessoa.sobrenome),
        idade: new FormControl(pessoa.idade),
        profissao: new FormControl(pessoa.profissao)
      });

      this.tituloFormulario = `Editar ${pessoa.nome} ${pessoa.sobrenome}`;
    });

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
  }

  exibirModalExcluir(id : number, nome : string, conteudoModal : TemplateRef<any>) : void{
    this.modalRef = this.modalService.show(conteudoModal);
    this.id = id;
    this.nomePessoa = nome;
  }

  excluir(id : number) : void{
    this.pessoasService.excluir(id).subscribe(resultado => {
      this.modalRef.hide();
      alert("Pessoa excluída com sucesso!");
      this.recuperarTodos();
    });
  }

  recuperarTodos() : void {
    this.pessoasService.recuperarTodos().subscribe(resultado => {
      this.pessoas = resultado;
    });
  }

  cadastrar() : void{
    const pessoa : Pessoa = this.formulario.value;

    if(pessoa.id > 0){
      this.pessoasService.atualizar(pessoa).subscribe(resultado => {
        alert("Os dados da pessoa foram alterados com sucesso!");
        this.voltar();
        this.recuperarTodos();
      });
    }else{
      this.pessoasService.adicionar(pessoa).subscribe(() => {
        alert("Pessoa cadastrada com sucesso!");
        this.voltar();
        this.recuperarTodos();
      });
    }
  }

  voltar() : void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
}
