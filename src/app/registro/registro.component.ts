import { Component, OnInit } from '@angular/core';
import { Gestion } from '../../services/Gestion';
import { ContactModel } from '../../models/ContactModel';
//componentes de form
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  signupForm:FormGroup;
  
  
  constructor(public router:Router) { 
     
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
    var gestion:Gestion = new Gestion();
    gestion.registrarUsuario(this.signupForm)

  }

}
