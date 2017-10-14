import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {TableInputModule} from "./components/table-input/table-input.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }