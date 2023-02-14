import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPessoa } from 'src/app/interfaces/IPessoa';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent {
  formulario : any;
  id: number = 0;

  constructor(
    private pessoasService : PessoasService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("id")!);

    this.pessoasService.recuperarPeloId(this.id).subscribe(pessoa => {
      this.formulario = new FormGroup({
        nome: new FormControl(pessoa.nome),
        sobrenome: new FormControl(pessoa.sobrenome),
        idade: new FormControl(pessoa.idade),
        profissao: new FormControl(pessoa.profissao)
      });
    })
  }

  atualizar() : void {
    const pessoa : IPessoa = this.formulario.value;
    pessoa.id = this.id;

    this.pessoasService.atualizar(pessoa).subscribe((resultado) => {
      alert("Os dados da pessoa foram alterados com sucesso!");
      this.router.navigate(["/Pessoas"]);
    });
  }
}
