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
      telefono: new FormControl('',[Validators.required,Validators.minLength(18)]),
      nacimiento: new FormControl('',Validators.required),
      usuario: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.pattern(/^\S*$/)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  public registrarUsuario(){
    this.cognito.Cognito_registrarUsuario(this.signupForm); 
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

  get malaextension(){

      if (this.signupForm.get('telefono').value.indexOf('(412)')>=0)
      return false; 
      if (this.signupForm.get('telefono').value.indexOf('(414)')>=0)
      return false;
      if (this.signupForm.get('telefono').value.indexOf('(424)')>=0)
      return false;
      if (this.signupForm.get('telefono').value.indexOf('(416)')>=0)
      return false;
      if (this.signupForm.get('telefono').value.indexOf('(426)')>=0)
      return false;

    return true; 
  }

  get hayespacio(){
    if (this.signupForm.get('usuario').value.indexOf(' ')>=0)
      return true;

    return false; 
  }

  get esinvalido(){
    var respuesta = false;   
    if (this.nombre.invalid)
       respuesta =true; 
    if (this.apellido.invalid)
       respuesta =true;
    if (this.nacimiento.invalid)
       respuesta =true;
    if (this.telefono.invalid)
       respuesta =true;
    if (this.usuario.invalid)
       respuesta =true;
    if (this.password.invalid)
       respuesta =true; 
      
    if (this.signupForm.get('usuario').value.indexOf(' ')>=0)
       respuesta =true;

    var telefonoinvalido = true;

    if (this.signupForm.get('telefono').value.indexOf('(412)')>=0)
    telefonoinvalido =false; 
    else if (this.signupForm.get('telefono').value.indexOf('(414)')>=0)
    telefonoinvalido =false; 
    else if (this.signupForm.get('telefono').value.indexOf('(424)')>=0)
    telefonoinvalido =false;
    else if (this.signupForm.get('telefono').value.indexOf('(416)')>=0)
    telefonoinvalido =false;
    else if (this.signupForm.get('telefono').value.indexOf('(426)')>=0)
    telefonoinvalido =false;
    else 
    telefonoinvalido =true;
       
    return (respuesta || telefonoinvalido); 
  }

}
