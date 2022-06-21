import { Directive, Input } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DirectivesDirective, multi: true },
  ],
})
export class DirectivesDirective implements Validator {
  @Input() minimo!: number;

  constructor() {}

  validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    return inputValue < this.minimo ? { customMin: true } : null;
  }
}
