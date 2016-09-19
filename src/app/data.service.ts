import { Injectable }       from '@angular/core';
import { Http,
         Headers,
         Request,
         RequestOptions,
         RequestMethod,
         Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';
import * as d3              from 'd3';

var observableCsv = Observable.bindCallback(d3.csv);

class Data {
  constructor(public name: string = "",
              public value: number = 0,
              public state = 'inactive') {
  }

  toggleState() {
    console.log("toogleing state");
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

let data = [
  {name: "first", value: 12},
  {name: "second", value: 42},
  {name: "third", value: 33}
].map(datum => new Data(datum.name, datum.value))
@Injectable()
export class DataService {
  public color = d3.scaleOrdinal(d3.schemeCategory20b);

  constructor() { }

  getData() {
    console.log("d3", d3)
    return Observable.of(data);
  }

  addData(name) {
    let newData = new Data(name, Math.random() * 100);
    data.push(newData);
  }

  getMouseEvent(){

  }

  getCsvData(url:string) {
    return observableCsv(url)
      .map(res => this.parseData(res[1]))
  }

  parseData(data){
    data.map((val, key) => {
      val.color = this.color(key);
      val["Refugee Count"] = +val["Refugee Count"];
      val["Refugee per Population"] = +val["Refugee per Population"];
      val["GDP"] = +val["GDP"];
      val["GDP per capita"] = +val["GDP per capita"];
      val["Refugee per Population"] = +val["Refugee per Population"];
      val["Population"] = +val["Population"];
      val["Area (km2)"] = +val["Area (km2)"];
      console.log('area', val["Area"])
    })
    return data;
  }

}
