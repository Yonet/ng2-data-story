import { Component, OnInit } from '@angular/core';
import { DataService }       from '../data.service';

@Component({
  selector: 'app-refugees',
  templateUrl: './refugees.component.html',
  styleUrls: ['./refugees.component.scss']
})
export class RefugeesComponent implements OnInit {
  data: any;
  refugeeData: any;
  keys: any = ["Refugee Count", "GDP", "Area (km2)", "Population", 'GDP per capita', 'GDP per Refugee'];
  currentKey: string = "Refugee Count";

  constructor(public dataService: DataService) {
    this.dataService.getData().subscribe(data => this.data = data);
    this.dataService.getCsvData("../assets/refugees.csv")
      .subscribe((res) => {
        this.refugeeData = res;
        // this.keys = Object.keys(this.refugeeData[0]);
      })
  }

  ngOnInit() {
  }

  addData (name) {
    this.dataService.addData(name);
  }

  renderBar(key) {
    console.log("key ", key)
    this.currentKey = key;
  }

}
