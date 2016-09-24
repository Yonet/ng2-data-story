import { Component }    from '@angular/core';
import { DataService }  from './data.service';
import { Observable }   from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  data: any;
  refugeeData: any;
  keys: any = ["Refugee Count", "GDP", "Area (km2)", "Population", 'GDP per capita', 'GDP per Refugee'];
  currentKey: string = "Refugee Count";
  homelessData: any;
  homelessKey: string;

  constructor(public dataService: DataService){
    this.dataService.getData().subscribe(data => this.data = data);
    this.dataService.getCsvData("../assets/refugees.csv")
      .subscribe((res) => {
        this.refugeeData = res;
        // this.keys = Object.keys(this.refugeeData[0]);
      });
    this.dataService.getJsonData('../assets/datasets/homelessPopulationByYearNYC.json')
      .subscribe((res) => {
        this.homelessData = res;
        this.homelessKey = 'Homeless Estimates';
      })

  }
  addData (name) {
    this.dataService.addData(name);
  }

  renderBar(key) {
    console.log("key ", key)
    this.currentKey = key;
  }
}
