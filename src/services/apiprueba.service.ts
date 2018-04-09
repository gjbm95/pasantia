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
            usuario.nombre = result.data[0].name;
            usuario.apellido = result.data[0].lastname;
            usuario.telefono = result.data[0].telephone;
            usuario.fecha = result.data[0].bdate;
        return usuario;
    }).catch( function(result){
    // Add error callback code here.
    });
    
    return usuario; 
  }
  
  public Api_callbackregistroBase(nombre,apellido,nacimiento,telefono,idtoken,apigClient){
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
      console.log(result);
      window.location.href = "profile"; 
      }).catch( function(error){
      // Add error callback code here.
      console.log(error);
      });
      
      
  }
  
  public Api_guardarenBase(cognitoUser,idtoken){
    var apigClient = apigClientFactory.newClient();
    
    var nombre ="";
    var apellido = ""; 
    var nacimiento = ""; 
    var telefono = ""; 
    var api = new ApipruebaService();
    cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        
        for (var i = 0; i < result.length; i++) {
            if (result[i].getName()=="custom:nombre")
            nombre = result[i].getValue();
            if (result[i].getName()=="custom:apellido")
            apellido = result[i].getValue();
            if (result[i].getName()=="custom:telefono")
            telefono = result[i].getValue();
            if (result[i].getName()=="custom:nacimiento")
            nacimiento = result[i].getValue();
            console.log("Lo que sale es :"+nombre);
        }
        api.Api_callbackregistroBase(nombre,apellido,nacimiento,telefono,idtoken,apigClient);
    });

    
    
  }

  

    

}
