import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validators/validator.service';
import {
  patronNombreYapellido,
  patronEmail,
} from '../../../shared/validators/validaciones';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup = this.formBuild.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(patronNombreYapellido)],
    ],
    userName: ['', [Validators.required, this.validator.noPuedeSerRepetido]],
    email: ['', [Validators.required, Validators.pattern(patronEmail)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmarPassword: ['', [Validators.required]],
  });

  constructor(
    private formBuild: FormBuilder,
    private validator: ValidatorService
  ) {}

  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched
    );
  }

  subirFormulario() {
    console.log(this.formulario.value);
    this.formulario.markAllAsTouched();
  }
}
