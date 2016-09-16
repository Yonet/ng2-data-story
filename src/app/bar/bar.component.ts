import { Component,
         Input,
         ElementRef,
         OnInit }           from '@angular/core';

import * as d3              from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  @Input() data: any;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private htmlElement: HTMLElement;

  constructor(private element: ElementRef) {
    this.htmlElement = this.element.nativeElement;
    this.host = d3.select(this.element.nativeElement);
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if(!this.data) return;
    this.setup();
    this.buildSVG();
    this.populate();
  }

  setup() {
    this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;
    this.xScale = d3.scaleBand()
    			.range([0, this.width], .1);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
  }

  buildSVG() {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  populate() {
    console.log(this.data.length)

    this.yScale.domain([0,d3.max(this.data, (d: any) => parseInt(d["Refugee Count"]))])


    this.xScale.domain(this.data.map((d) => d["Country"]))
      .paddingInner(0.1);;
    // console.log('x, y', this.xScale(4), this.yScale(4))
    this.svg.append('g').selectAll('.bar')
      .data(this.data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.xScale(d["Country"]))
        .attr("width", this.xScale.bandwidth())
        .attr("y", (d) => this.yScale(parseInt(d["Refugee Count"])))
        .attr("height", (d) => (this.height - this.yScale(parseInt(d["Refugee Count"]))));

  }

}
