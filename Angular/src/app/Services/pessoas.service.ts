import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../Model/Pessoa';
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
  url = 'https://localhost:5001/api/pessoas';

  constructor(private http: HttpClient) { }

  recuperarTodos() : Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  recuperarPeloId(id: number) : Observable<Pessoa>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.get<Pessoa>(apiUrl);
  }

  adicionar(pessoa: Pessoa) : Observable<any>{
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions);
  }

  atualizar(pessoa: Pessoa) : Observable<any>{
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions);
  }

  excluir(id: number) : Observable<any>{
    const apiUrl = `${this.url}/${id}`;
    return this.http.delete<Number>(apiUrl, httpOptions);
  }
}
