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
      usuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  public iniciarSesion(){  
    this.cognito.Cognito_iniciarSesion(this.signinForm);
       
  }

}
