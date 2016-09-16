import { Injectable }       from '@angular/core';
import { Http,
         Headers,
         Request,
         RequestOptions,
         RequestMethod,
         Response }         from '@angular/http';

import {  Observable }      from 'rxjs/Rx';
// import './core/d3';
import * as d3              from 'd3';
// declare var d3: any;
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
].map(datum => new Data(datum.name, datum.value))
@Injectable()
export class DataService {

  constructor() { }

  getData() {
    this.getCsvData();
    return Observable.of(data);
  }

  addData(name) {
    console.log("adding ", name)
    let newData = new Data(name, Math.random() * 100);
    data.push(newData);
  }

  getMouseEvent() {

  }

  getCsvData() {
    console.log('d3', d3)
    return observableCsv('../assets/refugees.csv')
      .map(res => res[1])//this.parseCsvData(res))
  }

  createScales(data) {
    let max = d3.max(data, (d) => parseInt(d["Refugee Count"]))
    // console.log("d3 is", d3.scaleLinear);
    let xScale = d3.scaleLinear()
      .range([0, 800])
      .domain([0, 10000]);


    console.log(xScale(500));
  }

  parseCsvData(res) {

    let data = res[1];

    // var nested_data = d3.nest()
    //   .key(function(d) { return d.Country; })
    //   .entries(data);

    // return nested_data;
    return data
  }

}
