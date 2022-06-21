import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  // formulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Producto'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(1),
  // });

  formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(1)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'Producto',
      precio: 0,
      existencias: 1,
    });
  }

  validarCampo(campo: string) {
    return (
      this.formulario.controls[campo].errors &&
      this.formulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.formulario.reset();
  }
}
