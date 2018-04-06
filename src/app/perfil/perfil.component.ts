import { Component, OnInit } from '@angular/core';
import { ApipruebaService } from '../apiprueba.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  constructor(public api:ApipruebaService) { 

  }

  ngOnInit() {
    this.api.Api_pruebaInicial();
    
  }

}
