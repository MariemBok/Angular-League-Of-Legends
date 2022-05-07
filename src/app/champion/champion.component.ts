import { Component, OnInit } from '@angular/core';
import {Champion} from "../../core/models/champion.model";
import ChampionJson from "../../assets/JSON/champion_info.json";

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styles: [
  ]
})
export class ChampionComponent implements OnInit {
  listChampions: Champion[] = ChampionJson.data;





  constructor() {

  }

  ngOnInit(): void {

  }

}
