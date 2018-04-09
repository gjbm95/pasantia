import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';

//componentes de form
import {FormGroup,FormControl, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApipruebaService } from '../../services/apiprueba.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  signupForm:FormGroup;
  
   
  
  constructor(public router:Router, public cognito:CognitoService) { 
     
  }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      nombre: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.minLength(1)]),
      apellido: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.minLength(1)]),
      telefono: new FormControl('',Validators.required),
      nacimiento: new FormControl('',Validators.required),
      usuario: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.pattern(/^\S*$/)]),
      password: new FormControl('',Validators.required)
    });
  }

  public registrarUsuario(){
    //this.cognito.Cognito_registrarUsuario(this.signupForm); 
  }
  
  //Campos
  get nombre() {
    return this.signupForm.get('nombre');
  }
  
  get apellido() {
    return this.signupForm.get('apellido');
  }
  get telefono() {
    return this.signupForm.get('telefono');
  }
  get nacimiento() {
    return this.signupForm.get('nacimiento');
  }
  get usuario() {
    return this.signupForm.get('usuario');
  }
  get password() {
    return this.signupForm.get('password');
  }

}
