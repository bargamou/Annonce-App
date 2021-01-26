import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnnonceGetComponent } from './getAnnonces/getAnnonces.component';
import { AddAnnonceComponent } from './addAnnonce/addAnnonce.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { VideoService } from './video.service';


const routes: Routes = [
  
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'getAnnonces',
    component: AnnonceGetComponent
  },
  {
    path: 'addAnnonce',
    component: AddAnnonceComponent
  },
  {path:'',redirectTo:"/login",pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AddAnnonceComponent,
    AnnonceGetComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
    exports: [
    CommonModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatSelectModule,
     MatIconModule,
     MatProgressSpinnerModule,
     RouterModule
     ],
  providers: [
    UserService,
    LoginComponent,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
