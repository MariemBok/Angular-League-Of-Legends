import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from "@angular/forms";
import { GridComponent } from './grid/grid.component';
import { DarkmodeToggleComponent } from './darkmode-toggle/darkmode-toggle.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ChampionComponent } from './champion/champion.component';

@NgModule({
  declarations: [
    AppComponent,

    GridComponent,
    DarkmodeToggleComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
