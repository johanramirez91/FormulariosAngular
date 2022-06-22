import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  noPuedeSerRepetido(control: FormControl): ValidationErrors | null {
    return control.value.trim().toLowerCase() === 'admin'
      ? { repetido: true }
      : null;
  }
}
