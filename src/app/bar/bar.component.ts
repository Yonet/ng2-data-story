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
  @Input() key: string;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;
  private t;
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
    this.t = d3.transition()
      .duration(750)
      .ease(d3.easeLinear);
    this.margin = { top: 40, right: 40, bottom: 40, left: 80 };
    this.width = window.innerWidth - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;
    this.xScale = d3.scaleBand()
    			.range([0, this.width], .1);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
    this.xAxis = d3.axisBottom(this.xScale);
    this.yAxis = d3.axisLeft(this.yScale)
        .ticks(10);
  }

  buildSVG() {
    // this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.height + ")")
          .call(this.xAxis);

    this.svg.append("g")
        .attr("class", "y axis")
        .call(this.yAxis)
      .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Refugee Count");
  }

  populate() {

    this.yScale.domain([0,d3.max(this.data, (d) => d[this.key])])

    this.xScale.domain(this.data.map((d) => d["Country"]))
      .paddingInner(0.1);

    this.svg.append('g').selectAll('.bar')
      .data(this.data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.xScale(d["Country"]))
        .attr("width", this.xScale.bandwidth())
        .attr("y", (d) => this.yScale(d[this.key]))
        .attr("height", (d) => (this.height - this.yScale(d[this.key])))
        .transition(this.t)
        .style("fill", (d, i) => d.color)
  }
}
