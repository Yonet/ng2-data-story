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

  constructor() { }

  getData() {
    console.log("d3", d3)
    return Observable.of(data);
  }

  addData(name) {
    console.log("adding ", name)
    let newData = new Data(name, Math.random() * 100);
    data.push(newData);
  }

  getMouseEvent(){

  }

  xScale(num) {
    let xScale = d3.scaleLinear()
      .range([0, 800])
      .domain([0, 10000])

    return xScale(num);
  }

  getCsvData() {
    return observableCsv('../assets/refugees.csv')
      .map(res => res[1])
  }

}
