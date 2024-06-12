import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluiToken(toke: string) {
    localStorage.removeItem(KEY)
  }

  possuiToken() {
    return !!this.retornaToken();
  }
}
