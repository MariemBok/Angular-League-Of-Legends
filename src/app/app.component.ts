import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lol-champions';

  columnDefs = [
    {headerName: "id", field: "id"},
    {headerName: "title", field: "title"},
    {headerName: "key", field: "key"},
    {headerName: "name", field: "name"},
  ];
  rowData = [
    {
      "title": "the Dark Child",
      "id": 1,
      "key": "Annie",
      "name": "Annie"
    },
    {
  "title": "the Berserker",
  "id": 2,
  "key": "Olaf",
  "name": "Olaf"
},
{
  "title": "the Colossus",
    "id": 3,
    "key": "Galio",
    "name": "Galio"
},
{
  "title": "the Card Master",
    "id": 4,
    "key": "TwistedFate",
    "name": "Twisted Fate"
}, {
  "title": "the Seneschal of Demacia",
    "id": 5,
    "key": "XinZhao",
    "name": "Xin Zhao"
},
{
  "title": "the Dreadnought",
    "id": 6,
    "key": "Urgot",
    "name": "Urgot"
},
{
  "title": "the Deceiver",
    "id": 7,
    "key": "Leblanc",
    "name": "LeBlanc"
},
{
  "title": "the Crimson Reaper",
    "id": 8,
    "key": "Vladimir",
    "name": "Vladimir"
},
{
  "title": "the Harbinger of Doom",
    "id": 9,
    "key": "Fiddlesticks",
    "name": "Fiddlesticks"
},
{
  "title": "The Judicator",
    "id": 10,
    "key": "Kayle",
    "name": "Kayle"
},
{
  "title": "the Wuju Bladesman",
    "id": 11,
    "key": "MasterYi",
    "name": "Master Yi"
},
{
  "title": "the Minotaur",
    "id": 12,
    "key": "Alistar",
    "name": "Alistar"
},
{
  "title": "the Rune Mage",
    "id": 13,
    "key": "Ryze",
    "name": "Ryze"
},
 {
  "title": "The Undead Juggernaut",
    "id": 14,
    "key": "Sion",
    "name": "Sion"
},
    {
      "title": "the Dark Child",
      "id": 1,
      "key": "Annie",
      "name": "Annie"
    },
    {
      "title": "the Berserker",
      "id": 2,
      "key": "Olaf",
      "name": "Olaf"
    },
    {
      "title": "the Colossus",
      "id": 3,
      "key": "Galio",
      "name": "Galio"
    },
    {
      "title": "the Card Master",
      "id": 4,
      "key": "TwistedFate",
      "name": "Twisted Fate"
    }, {
      "title": "the Seneschal of Demacia",
      "id": 5,
      "key": "XinZhao",
      "name": "Xin Zhao"
    },
    {
      "title": "the Dreadnought",
      "id": 6,
      "key": "Urgot",
      "name": "Urgot"
    },
    {
      "title": "the Deceiver",
      "id": 7,
      "key": "Leblanc",
      "name": "LeBlanc"
    },
    {
      "title": "the Crimson Reaper",
      "id": 8,
      "key": "Vladimir",
      "name": "Vladimir"
    },
    {
      "title": "the Harbinger of Doom",
      "id": 9,
      "key": "Fiddlesticks",
      "name": "Fiddlesticks"
    },
    {
      "title": "The Judicator",
      "id": 10,
      "key": "Kayle",
      "name": "Kayle"
    },
    {
      "title": "the Wuju Bladesman",
      "id": 11,
      "key": "MasterYi",
      "name": "Master Yi"
    },
    {
      "title": "the Minotaur",
      "id": 12,
      "key": "Alistar",
      "name": "Alistar"
    },
    {
      "title": "the Rune Mage",
      "id": 13,
      "key": "Ryze",
      "name": "Ryze"
    },
    {
      "title": "The Undead Juggernaut",
      "id": 14,
      "key": "Sion",
      "name": "Sion"
    }
  ];
}
