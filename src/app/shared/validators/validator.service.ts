import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

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

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[campo1];
      const control2 = formGroup.controls[campo2];

      if (control1.value === control2.value) {
        control2.setErrors(null);
      } else {
        control2.setErrors({ noIguales: true });
      }
    };
  }
}
