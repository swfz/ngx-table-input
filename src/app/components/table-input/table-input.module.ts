import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableInputComponent} from "./table-input.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableInputComponent
  ],
  exports: [
    TableInputComponent
  ]
})
export class TableInputModule { }
