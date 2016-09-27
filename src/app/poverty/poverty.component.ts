import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Rx';

import { Animations }        from '../animations';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.component.html',
  styleUrls: ['./poverty.component.scss'],
  animations: [
    Animations.flyInOut,
    Animations.datumState,
    Animations.income
  ]
})
export class PovertyComponent implements OnInit {
  private data: any;
  private buttons: any;
  private idealData: any;
  private guessData: any;
  private showReal: boolean = false;
  private showGuessed: boolean = false;
  private showIdeal : boolean = false;
  constructor(public dataService: DataService) {
    this.dataService.getPovertyData()
      .subscribe((d) => console.log('d ', d));
    this.buttons = [
      { name : "Guess", active: true },
      { name : "Reality", active: false },
      { name : "Ideal", active: false }];
    this.dataService.getData()
      .subscribe((res) => {
        this.data = res;
      })

  }

  ngOnInit() {

  }

}
