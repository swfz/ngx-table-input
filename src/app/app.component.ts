import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timetable: any;
  tableRowLabels: string[];
  tableColLabels: string[];

  sampleParam: any;
  tableRowLabels2: string[];
  tableColLabels2: string[];
  constructor() { }

  ngOnInit() {
    this.tableRowLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.tableColLabels = Array.from(Array(24).keys()).map(_ => ('0' + _).slice(-2));
    this.tableRowLabels2 = ['hoge','fuga','piyo'];
    this.tableColLabels2 = ['AA','BB','CC'];
  }
}
