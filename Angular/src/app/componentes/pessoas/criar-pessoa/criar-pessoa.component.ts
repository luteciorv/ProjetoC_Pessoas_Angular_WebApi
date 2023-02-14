import { Router } from '@angular/router';
import { IPessoa } from './../../../interfaces/IPessoa';
import { PessoasService } from './../../../services/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {
  formulario : any;

  constructor(
    private pessoasService : PessoasService,
    private router : Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });
  }

  cadastrar() : void {
    const pessoa : IPessoa = this.formulario.value;

    this.pessoasService.criar(pessoa).subscribe((resultado) => {
      alert("Pessoa criada com sucesso!");
      this.router.navigate(["/Pessoas"]);
    });
  }
}
