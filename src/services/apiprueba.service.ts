import { Injectable } from '@angular/core';

declare let apigClientFactory: any;
declare let AWSCognito:any;
@Injectable()
export class ApipruebaService {
  
  constructor() { }

 


  public Api_pruebaInicial (){ 
    var apigClient = apigClientFactory.newClient();
    var body ={};
    var params = {};
    var extraparams = {};
    apigClient.probandoGet(params,body,extraparams)
    .then(function(result){
    // Add success callback code here.
    console.log("Resultado: " + result);
    }).catch( function(result){
    // Add error callback code here.
    });
  }

  public Api_obtenerDatos(usuario):any{
    var apigClient = apigClientFactory.newClient();
    var body ={
      };
      var params = {
      };
      var token = localStorage.getItem("token");
      var extraparams = {
          headers: {
              "Authorization": token 
          },
          queryParams: {
          }
      };

    apigClient.accountsGet(params,body,extraparams)
    .then(function(result){
        for (var i = 0; i < result.length; i++) {
            if (result[i].getName()=="nombre")
            usuario.nombre = result[i].getValue();
            if (result[i].getName()=="apellido")
            usuario.apellido = result[i].getValue();
            if (result[i].getName()=="telefono")
            usuario.telefono = result[i].getValue();
            if (result[i].getName()=="nacimiento")
            usuario.nacimiento = result[i].getValue();

           
        }
    }).catch( function(result){
    // Add error callback code here.
    });
    
    return usuario; 
  }

  
  public Api_guardarenBase(cognitoUser,idtoken){
    var apigClient = apigClientFactory.newClient();
    
    var nombre ="";
    var apellido = ""; 
    var nacimiento = ""; 
    var telefono = ""; 

    cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        for (var i = 0; i < result.length; i++) {
            if (result[i].getName()=="nombre")
            nombre = result[i].getValue();
            if (result[i].getName()=="apellido")
            apellido = result[i].getValue();
            if (result[i].getName()=="telefono")
            telefono = result[i].getValue();
            if (result[i].getName()=="nacimiento")
            nacimiento = result[i].getValue();
        }
    });
    var body ={
      "nombre": nombre,
      "apellido": apellido,
      "nacimiento": nacimiento,
      "telefono": telefono
    };
    var params = {
    };
    var extraparams = {
        headers: {
            "Authorization": idtoken 
        },
        queryParams: {
        }
    };
    apigClient.accountsPost(params,body,extraparams)
    .then(function(result){
    // Add success callback code here.
    window.location.href = "profile"; 
    }).catch( function(result){
    // Add error callback code here.
    });
  }

  

    

}
