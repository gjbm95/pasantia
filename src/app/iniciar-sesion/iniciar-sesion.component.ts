import { Component, OnInit } from '@angular/core';
//componentes de form
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { ApipruebaService } from '../../services/apiprueba.service';
import { CognitoService } from '../../services/cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  signinForm:FormGroup;

  constructor(public router:Router,public cognito:CognitoService) { }

  ngOnInit() {
    this.signinForm = new FormGroup ({
      usuario: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.pattern(/^\S*$/)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  public iniciarSesion(){  
    this.cognito.Cognito_iniciarSesion(this.signinForm);
       
  }

  get usuario() {
    return this.signinForm.get('usuario');
  }
  get password() {
    return this.signinForm.get('password');
  }

  get esinvalido(){
    var respuesta = false;   
    if (this.usuario.invalid)
       respuesta =true;
    if (this.password.invalid)
       respuesta =true;
       
    return respuesta; 
  }


}
