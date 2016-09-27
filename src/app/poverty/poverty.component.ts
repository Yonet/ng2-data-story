import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Rx';

import { DataService }       from '../data.service';

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.component.html',
  styleUrls: ['./poverty.component.scss']
})
export class PovertyComponent implements OnInit {
  private data: any;
  private buttons: any;

  constructor(public dataService: DataService) {
    this.dataService.getPovertyData()
      .subscribe((d) => console.log('d ', d));
    this.buttons = [
      { name : 1, active: true },
      { name : 2, active: false },
      { name : 3, active: false }];
    this.dataService.getData()
      .subscribe((res) => this.data = res);
    // this.data = [
    //   {name: "Lowest quintile", totalPeople: 10,  totalWealth: 20, income:4825 },
    //   {name: "Second quintile", totalPeople: 100, totalWealth: 30, income:24284 },
    //   {name: "Third quintile", totalPeople: 100, totalWealth: 40, income:58226 },
    //   {name: "Fourth quintile", totalPeople: 100, totalWealth: 50, income:113422 },
    //   {name: "Highest quintile", totalPeople: 100, totalWealth: 60, income:292646 },
    //   {name: "top 1%", totalPeople: 1, totalWealth: 20}
    // ];
  }

  ngOnInit() {
    console.log("d ", this.data)

  }

}
