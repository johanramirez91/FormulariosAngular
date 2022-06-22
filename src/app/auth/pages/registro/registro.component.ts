import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validators/validator.service';
import {
  patronNombreYapellido,
  patronEmail,
} from '../../../shared/validators/validaciones';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup = this.formBuild.group(
    {
      nombre: [
        '',
        [Validators.required, Validators.pattern(patronNombreYapellido)],
      ],
      userName: ['', [Validators.required, this.validator.noPuedeSerRepetido]],
      email: [
        '',
        [Validators.required, Validators.pattern(patronEmail)],
        [this.emailValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required]],
    },
    {
      validators: this.validator.camposIguales('password', 'confirmarPassword'),
    }
  );

  constructor(
    private formBuild: FormBuilder,
    private validator: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched
    );
  }

  get errorMessage(): string {
    const errors = this.formulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es requerido';
    } else if (errors?.['pattern']) {
      return 'El email no es valido';
    } else if (errors?.['yaExiste']) {
      return 'El email ya existe';
    }
    return '';
  }

  subirFormulario() {
    console.log(this.formulario.value);
    this.formulario.markAllAsTouched();
  }
}
