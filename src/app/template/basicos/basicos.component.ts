import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  @ViewChild('miFormulario') formulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
  };

  guardar() {
    this.formulario.resetForm(this.initForm);
  }

  validarNombre(): boolean {
    return (
      this.formulario?.controls['producto']?.invalid &&
      this.formulario?.controls['producto']?.touched
    );
  }

  validarPrecio(): boolean {
    return (
      this.formulario?.controls['precio']?.touched &&
      this.formulario?.controls['precio']?.value < 0
    );
  }
}
