import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['Eder', [Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      ['Fifa', Validators.required],
      ['Madden', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);


  get FavoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  guardar(){
    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  campoNoEsValido(campo: string){
    
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  
  }

  agregarFavorito(){
    if ( this.nuevoFavorito.invalid){
      return;
    }


    //this.FavoritosArr.push ( new FormControl( this.nuevoFavorito.value, Validators.required )  );
    this.FavoritosArr.push ( this.fb.control( this.nuevoFavorito.value, Validators.required )  );
    this.nuevoFavorito.reset();
  }

  borrarFavorito(i: number){
    this.FavoritosArr.removeAt(i);
  }

}
