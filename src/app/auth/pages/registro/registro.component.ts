import { Component, OnInit } from '@angular/core';
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
  patronNombreYapellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerRepetido(control: FormControl) {
    return control.value.trim().toLowerCase() === 'admin'
      ? { repetido: true }
      : null;
  }

  formulario: FormGroup = this.formBuild.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.patronNombreYapellido)],
    ],
    userName: ['', [Validators.required, this.noPuedeSerRepetido]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmarPassword: ['', [Validators.required]],
  });

  constructor(private formBuild: FormBuilder) {}

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
