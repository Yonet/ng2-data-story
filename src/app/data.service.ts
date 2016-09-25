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
  { name: "first", value: 12 },
  { name: "second", value: 42 },
  { name: "third", value: 33 }
].map(datum => new Data(datum.name, datum.value));

@Injectable()
export class DataService {
  public color = d3.scaleOrdinal(d3.schemeCategory20b);
  // http;
  constructor(private http: Http) { }

  getData() {
    return Observable.of(data);
  }

  getJsonData(url) {
    return this.http.get(url)
      .map((res) => {
        let json = res.json();
        let data = json.data;
        let columns = json.meta.view.columns;
        let result = this.parseHomelessData(data, columns);
        return result;
      })
  }

  addData(name) {
    let newData = new Data(name, Math.random() * 100);
    data.push(newData);
  }

  getMouseEvent() {

  }

  getCsvData(url: string) {
    return observableCsv(url)
      .map(res => this.parseData(res[1]))
  }

  parseData(data) {
    data.map((val, key) => {
      val.color = this.color(key);
      val["Refugee Count"] = +val["Refugee Count"];
      val["Refugee per Population"] = +val["Refugee per Population"];
      val["GDP"] = +val["GDP"];
      val["GDP per capita"] = +val["GDP per capita"];
      val["Refugee per Population"] = +val["Refugee per Population"];
      val["Population"] = +val["Population"];
      val["Area (km2)"] = +val["Area (km2)"];
    })
    return data;
  }

  parseHomelessData (data, columns){
    data.map((val, key) => {
      let datum = {}
      val.forEach((item, i) => {
        if(columns[i].name === "Homeless Estimates" || columns[i].name === "Year") { item = parseInt(item)}
        datum[columns[i].name] = item;
      })
      data[key] = datum;

    })
    // console.log('data', data);
    return data;
  }

}
