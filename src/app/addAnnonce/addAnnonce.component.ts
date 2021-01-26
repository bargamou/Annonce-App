import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';
import { Router } from '@angular/router';
import { Annonce } from '../Annonce';
import { AnnonceService } from '../annonce.service';
import { Video } from '../Video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './addAnnonce.component.html',
  styleUrls: ['./addAnnonce.component.scss']
})
export class AddAnnonceComponent implements OnInit {

  annonce: Annonce={};
  videos: Video[];
  confirmedPassword?: string;
  nameusr?: string;
  currentUser: string;
  selectedValue: string;

  constructor(private as: AnnonceService,private vs: VideoService, private router: Router) {
    this.currentUser = localStorage.getItem('username');
   }
 
  ngOnInit() {
    this.getVideos();
  }
  goToLoginIn(){ 
    
      this.router.navigate(["login"]);
  }

  selectedData(value) {
    this.selectedValue = value;
  }

  getVideos(): void {
    console.log('here');
    this.vs
    .getVideos()
    .subscribe((data: Video[]) => {
    this.videos = data;
    })
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['addAnnonce']);
  }

  addAnnonce(){
    this.annonce.video = this.selectedValue;
    this.annonce.username = this.currentUser;
    console.log(this.annonce);
    this.as.addAnnonce(this.annonce);
    this.reloadComponent();
  }
  goToHome(){ 
    this.router.navigate(["home"]);
  }
 
}
