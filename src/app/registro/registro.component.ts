import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/CognitoService';
import { ContactModel } from '../../models/ContactModel';

//componentes de form
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApipruebaService } from '../apiprueba.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  signupForm:FormGroup;
  
  
  constructor(public router:Router, public api:ApipruebaService) { 
     
  }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      nombre: new FormControl(),
      apellido: new FormControl(),
      telefono: new FormControl(),
      nacimiento: new FormControl(),
      usuario: new FormControl(),
      password: new FormControl()
    });
  }

  public registrarUsuario(){
    this.api.Cognito_registrarUsuario(this.signupForm); 
  }

}
