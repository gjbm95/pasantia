import { Component, OnInit } from '@angular/core';
import { ApipruebaService } from '../../services/apiprueba.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  

  public usuario = {
      nombre:"",
      apellido:"",
      telefono:"",
      fecha:""
  };

  constructor(public api:ApipruebaService) { 
   
  }

  ngOnInit() {
    this.usuario = this.api.Api_obtenerDatos(this.usuario);
    
  }

}
