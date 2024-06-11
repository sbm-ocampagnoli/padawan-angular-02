import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParseSourceFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha
      }
    )
  }
}
