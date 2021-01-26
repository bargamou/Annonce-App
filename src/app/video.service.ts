import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { BehaviorSubject, Observable } from 'rxjs';
import { Video } from './Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  uri = 'http://localhost:4000/video';
  
  videos: Video[];
  access: boolean;
  
  constructor(private http: HttpClient) {
  
  }

  addVideo(video: Video){ 
    console.log(video);
    this.http.post(`${this.uri}/add`, video)
        .subscribe(res => console.log('Done'));
  }

  getVideos() {
      console.log('appel');
    return this.http.get(`${this.uri}/`);
  }
}