import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent {
  @ViewChild('miFormulario') formulario!: NgForm;
  persona = {
    genero: '',
    notificaciones: true,
  };

  terminoYCondiciones: boolean = false;
}
