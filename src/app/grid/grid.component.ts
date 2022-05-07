import {Component, Input, OnInit} from '@angular/core';
import {Champion} from "../../core/models/champion.model";
import ChampionJson from "../../assets/JSON/champion_info.json";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() dark!: boolean;
  constructor() { }
  listChampions: Champion[] = ChampionJson.data;

  ngOnInit(): void {
  }
  columnDefs = [
    {headerName: "id", field: "id"},
    {headerName: "title", field: "title"},
    {headerName: "key", field: "key"},
    {headerName: "name", field: "name"},
  ];
  rowData = this.listChampions;

}
