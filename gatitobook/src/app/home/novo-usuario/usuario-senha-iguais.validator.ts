import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(form: FormGroup) {
  const userName = form.get('userName')?.value ?? '';
  const password = form.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
