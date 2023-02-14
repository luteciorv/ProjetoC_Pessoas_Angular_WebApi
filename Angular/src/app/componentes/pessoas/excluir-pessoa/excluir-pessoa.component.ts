import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css']
})
export class ExcluirPessoaComponent {
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

  excluir() : void {
    this.pessoasService.excluir(this.id).subscribe((resultado) => {
      alert("A pessoa foi excluída com sucesso!");
      this.router.navigate(["/Pessoas"]);
    });
  }
}
