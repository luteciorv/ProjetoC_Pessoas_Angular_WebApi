import { IPessoa } from './../interfaces/IPessoa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PessoasService {
  private readonly apiRoute = 'https://localhost:5001/api/pessoas';

  constructor(private http: HttpClient) { }

  criar(pessoa: IPessoa) : Observable<IPessoa>{
    return this.http.post<IPessoa>(this.apiRoute, pessoa, httpOptions);
  }

  recuperarTodos() : Observable<IPessoa[]>{
    return this.http.get<IPessoa[]>(this.apiRoute);
  }

  recuperarPeloId(id: number) : Observable<IPessoa>{
    const urlRecuperar = `${this.apiRoute}/${id}`;
    return this.http.get<IPessoa>(urlRecuperar);
  }

  atualizar(pessoa: IPessoa) : Observable<IPessoa>{
    return this.http.put<IPessoa>(this.apiRoute, pessoa, httpOptions);
  }

  excluir(id: number) : Observable<any>{
    const urlExcluir = `${this.apiRoute}/${id}`;
    return this.http.delete<Number>(urlExcluir, httpOptions);
  }
}
