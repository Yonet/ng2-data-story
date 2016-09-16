import { Component,
         ElementRef,
         OnInit }       from '@angular/core';
import { DataService }  from './data.service';
import { Animations }   from './animations'
// import * as d3              from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    Animations.flyInOut,
    Animations.datumState
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data: any;
  refugeeData: any;
  xScale: any;
  yScale: any;

  constructor(public dataService: DataService){
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => this.data = data);
    this.dataService.getCsvData()
      .subscribe(data => {
        this.refugeeData = data;
        this.render();
        // console.log("Csv data ", this.refugeeData);
      })
  }

  addData (name) {
    this.dataService.addData(name);
  }

  setUpGraph() {
    this.dataService.createScales(this.refugeeData);
    let max = d3.max(this.refugeeData, (d) => parseInt(d["Refugee Count"]))

    this.xScale = d3.scaleLinear()
      .range([0, 800])
      .domain([0, max]);
  }

  render() {
    this.setUpGraph();
    d3.selectAll("div")
      .data(this.refugeeData)
      .enter().append()
        .style('width', (d) => this.xScale(+d["Refugee Count"]))
        // .style("color", (d) => d3.schemeDark2(d))
    // console.log(this.refugeeData.columns);
  }


}
