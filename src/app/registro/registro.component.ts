import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';

//componentes de form
import {FormGroup,FormControl, Validators} from '@angular/forms';
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
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      nacimiento: new FormControl('',Validators.required),
      usuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  public registrarUsuario(){
    this.cognito.Cognito_registrarUsuario(this.signupForm); 
  }

}
