import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';
import { Subscription } from 'rxjs';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  currentUser : User = null;
  username: string;
  password: string;
  access : boolean;
  role:string;
  subscription: Subscription;

  constructor(private router: Router, private us: UserService) {

  }

  ngOnInit() {
  }
 
  goToSignUp(){   
    this.router.navigate(["user"]);
  }
 
  

  public login()  { 
    var access : boolean;
     
    this.us.getUsers().subscribe((data: User[]) => {
        
        for(var i = 0; i <= data.length - 1; i++){ 
          console.log((data[i].username === this.username && data[i].password === this.password));
          if(data[i].username === this.username && data[i].password === this.password){
              this.role = data[i].role;
              console.log("Login >> " + data[i].username + ", " + this.password + " equals " + data[i].password + ", " + this.password);
              access = true;
              localStorage.setItem('username', this.username);
          }
        }
        if(access === true){
        if(this.role == 'Advertiser'){
          this.router.navigate(["home"]);
        }
        else{
         alert("Ce n'est pas un compte d'annonceur !!" );
        } 
        }else {
          alert("Mot de passe ou Nom d'utilisateur incorrecte !");
        } 
      }); 
  }


}

