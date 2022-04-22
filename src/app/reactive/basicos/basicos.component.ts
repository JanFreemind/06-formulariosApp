import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    nombre      : [ 'Wolo' ],
    precio      : [ 0 ],
    existencias : [ 0 ]
  })

  constructor( private fb: FormBuilder) { }

}
