import { Injectable }       from '@angular/core';
import { Http,
         Headers,
         Request,
         RequestOptions,
         RequestMethod,
         Response }         from '@angular/http';
import { Observable }       from 'rxjs/Rx';

import { D3Service,
         D3,
         D3DragEvent,
         D3ZoomEvent,
         DSV,
         ScaleOrdinal,
         Axis,
         BrushBehavior,
         BrushSelection,
         D3BrushEvent,
         ScaleLinear,
         Transition,
         Selection }        from 'd3-ng2-service';

import * as req from 'd3-request';

var d3: D3;
var color;
const observablePoverty = Observable.bindCallback(req.csv);
const observableCsv = Observable.bindCallback(req.csv);

class Data {
  constructor(public name: string = "",
    public value: any,
    public state = 'inactive',
    public color: string = "#462066") {
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

let guessedData = [
  { name: "Lowest quintile", value: 4 },//color: "#462066" },
  { name: "Second quintile", value: 6}, //color: '#FFB85F' },
  { name: "Third quintile", value: 10 },//color: '#FF7A5A' },
  { name: "Fourth quintile", value: 21 },//color: '#00AAA0' },
  { name: "Highest quintile", value: 59},//color: '#8ED2C9' },
  // { name: "Top 1%", value: 40},//color: '#FCF4D9'  },
].map(datum => new Data(datum.name, datum.value));

let data = [
  { name: "Lowest quintile", value: 0.1 },//color: "#462066" },
  { name: "Second quintile", value: 0.2}, //color: '#FFB85F' },
  { name: "Third quintile", value: 4.3},//color: '#FF7A5A' },
  { name: "Fourth quintile", value: 11.2 },//color: '#00AAA0' },
  { name: "Highest quintile", value: 84.2},//color: '#8ED2C9' },
  // { name: "Top 1%", value: 40},//color: '#FCF4D9'  },
].map(datum => new Data(datum.name, datum.value));

let swedenData = [
  { name: "Lowest quintile", value: 11 },//color: "#462066" },
  { name: "Second quintile", value: 21}, //color: '#FFB85F' },
  { name: "Third quintile", value: 15},//color: '#FF7A5A' },
  { name: "Fourth quintile", value: 35 },//color: '#00AAA0' },
  { name: "Highest quintile", value: 18},//color: '#8ED2C9' },
  // { name: "Top 1%", value: 40},//color: '#FCF4D9'  },
].map(datum => new Data(datum.name, datum.value));

@Injectable()
export class DataService {
  public color;

  constructor(private http: Http, private d3Service: D3Service ) {
    d3 = d3Service.getD3();
    this.color = d3.scaleOrdinal(d3.schemeCategory20b);
    // observableCsv = Observable.bindCallback(req.csv);

  }

  getData() {
    var total = 0;
    data.map((d, i) => {
      d.color = this.color(i);
      total +=d.value;
      d.value = (d.value ) + '%';
    })
    return Observable.of(data)
  }

  getGuessedData() {
    var total = 0;
    guessedData.map((d, i) => {
      d.color = this.color(i);
      total +=d.value;
      d.value = (d.value ) + '%';
    })
    console.log('guess',total);
    return Observable.of(guessedData);
  }

  getSwedenData() {
    var total = 0;
    swedenData.map((d, i) => {
      d.color = this.color(i);
      total +=d.value;
      d.value = (d.value ) + '%';
    })
    return Observable.of(swedenData)
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

  getPovertyData() {
    return observablePoverty("../assets/povertyData.csv")
      .map(res => this.parsePovertyData(res[1]))
  }

  parsePovertyData(data) {
  }



  getCsvData(url: string) {
    return observableCsv(url)
      .map(res => this.parseData(res[1]))
  }

  parseData(data) {
    console.log("parsing ", data)
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
    console.log("parsed ", data)
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
    return data;
  }

  addData(name) {
    let newData = new Data(name, Math.random() * 100);
    data.push(newData);
  }

}
