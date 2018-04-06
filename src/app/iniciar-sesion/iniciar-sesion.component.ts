import { Component, OnInit } from '@angular/core';
//componentes de form
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { ApipruebaService } from '../apiprueba.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  signinForm:FormGroup;

  constructor(public router:Router,public api:ApipruebaService) { }

  ngOnInit() {
    this.signinForm = new FormGroup ({
      usuario: new FormControl(),
      password: new FormControl()
    });
  }

  public iniciarSesion(){  
    this.api.Cognito_iniciarSesion(this.signinForm);
       
  }

}
