import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.component.html',
  styleUrls: ['./poverty.component.scss']
})
export class PovertyComponent implements OnInit {
  private data: any;
  private buttons: any;

  constructor() {
    this.buttons = [1, 2, 3];
    this.data = [1, 2, 3];
  }

  ngOnInit() {
  }

}
