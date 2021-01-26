import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../Annonce';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-getAnnonces',
  templateUrl: './getAnnonces.component.html',
  styleUrls: ['./getAnnonces.component.scss']
})

export class AnnonceGetComponent implements OnInit {

  annonces: Annonce[];
  currentUser: String;

  constructor(private as: AnnonceService, private router: Router) {
      this.currentUser = localStorage.getItem("username");
   }

  ngOnInit() {
   this.getAnnonces();
  }

  goToAdmin(){ 
    this.router.navigate(["home"]);
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['getAnnonces']);
  }

  getAnnonces(): void {
    this.as
    .getAnnonces(this.currentUser)
    .subscribe((data: Annonce[]) => {
    this.annonces = data;
    })
  }

  deleteAnnonce(id) {
    console.log(id);
    this.as
    .deleteAnnonce(id)
    .subscribe((data)=>{
      this.reloadComponent();
      console.log("success");
      
    });
  }
 
}
