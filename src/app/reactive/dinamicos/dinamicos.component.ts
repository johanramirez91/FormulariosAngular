import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [
        ['Metal Slug', Validators.required],
        ['Medal of Honor', Validators.required],
      ],
      [Validators.required, Validators.minLength(1)]
    ),
  });

  nuevoFav: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArr() {
    return this.formulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

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
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  agregarFavorito() {
    if (this.nuevoFav.invalid) {
      return;
    }
    this.favoritosArr.push(
      this.formBuilder.control(this.nuevoFav.value, Validators.required)
    );
  }
}
