import { ContactModel } from '../models/ContactModel';
import { LoginModel } from '../models/LoginModel';
import { Router } from '@angular/router';
import { ApipruebaService } from './../app/apiprueba.service';
declare let AWSCognito:any;

export class CognitoService {
    

    constructor(public api:ApipruebaService) {

     }

    public registrarUsuario(signupForm){
      AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint
        
    var poolData = { UserPoolId : 'us-east-1_Tsg47WLz7',
        ClientId : '6q95ilhgmar8fbmlqk0hsdmt9i'
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    var attributeList = [];
    
    var usuario = signupForm.controls['usuario'].value;
    var password = signupForm.controls['password'].value;
    var telefono = signupForm.controls['telefono'].value; 
    var dataName = {
        Name : 'custom:nombre',
        Value : signupForm.controls['nombre'].value
    };

    var dataLastName = {
        Name : 'custom:apellido',
        Value : signupForm.controls['apellido'].value
    };
    var dataPhone = {
        Name : 'custom:telefono',
        Value : telefono.toString()
    };  

    var dataBirthday = {
        Name : 'custom:nacimiento',
        Value : signupForm.controls['nacimiento'].value
    };

    var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);
    var attributeLastName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataLastName);
    var attributePhone = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhone);
    var attributeBirthday = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataBirthday);
    attributeList.push(attributeName);
    attributeList.push(attributeLastName);
    attributeList.push(attributePhone);
    attributeList.push(attributeBirthday); 
    userPool.signUp(usuario,password, attributeList, null, function(err, result){
        var cognitoUser:any;
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());    
        this.api.registrarUsuario(this.signupForm);
        window.location.href = "index"; 
    });
     
    }

    public iniciarSesion(signinForm){
        
        var authenticationData = {
            Username : signinForm.controls['usuario'].value,
            Password : signinForm.controls['password'].value
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var poolData = { UserPoolId : 'us-east-1_Tsg47WLz7',
        ClientId : '6q95ilhgmar8fbmlqk0hsdmt9i'
        };
        var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
        var userData = {
            Username : signinForm.controls['usuario'].value,
            Pool : userPool
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
         
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
                console.log('idToken + ' + result.idToken.jwtToken);
                localStorage.setItem("token",result.idToken.jwtToken);
                window.location.href = "profile"; 
            },
    
            onFailure: function(err) {
                alert(err);
            },
    
        });
         
     
    }
  
  }