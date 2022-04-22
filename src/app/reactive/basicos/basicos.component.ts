import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  //miFormulario: FormGroup = new FormGroup({
  //  'nombre'     : new FormControl('Wolo'),
  //  'precio'     : new FormControl( 10 ),
  //  'existencias': new FormControl( 5 ),
  //})

  miFormulario: FormGroup = this.fb.group({
    nombre      : [ 'Wolo', [ Validators.required, Validators.minLength(3) ] ],
    precio      : [ 0, [ Validators.min(0), Validators.required ]  ],
    existencias : [ 0, [ Validators.min(0), Validators.required ]  ]
  })

  constructor( private fb: FormBuilder) { }

}
