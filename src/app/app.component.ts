import { Component, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DarkmodeToggleComponent} from "./darkmode-toggle/darkmode-toggle.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore

  title = 'lol-champions';
  darkmode!:boolean;

  darken(eventData: {dark: boolean}){
   this.darkmode= eventData.dark;
  }
  }





