import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  blogTitle = "Junkyard Rock Stories";
  baseUrl = "http://localhost:4200/"

constructor() { }

}
