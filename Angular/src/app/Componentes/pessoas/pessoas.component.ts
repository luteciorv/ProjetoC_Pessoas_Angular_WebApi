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

  constructor(private pessoasService : PessoasService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });

    this.tituloFormulario = "Nova Pessoa";
  }

  cadastrar() : void{
    const pessoa : Pessoa = this.formulario.value;
    this.pessoasService.adicionar(pessoa).subscribe(resultado => {
      alert("Pessoa cadastrada com sucesso!");
    });
  }
}
