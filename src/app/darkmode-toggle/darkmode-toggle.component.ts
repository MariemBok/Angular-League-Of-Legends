import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import {FormControl} from "@angular/forms";



@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.css']
})
export class DarkmodeToggleComponent implements OnInit {
  isDark = new FormControl();
  @Output() darkevent = new EventEmitter<{dark:boolean}>()
  fa = faSun;
  mode = "Light mode";
  static isDark: FormControl;

  constructor() { }

  ngOnInit(): void {
  }
  isSlideChecked(){
    if (this.isDark.value){
      this.fa= faMoon;
      this.mode = "Dark mode";

    }
    else {
      this.fa= faSun;
      this.mode = "Light mode";
    }
    this.darkevent.emit({dark:this.isDark.value});
  }

}
