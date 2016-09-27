import { Component,
  Input,
  ElementRef,
  OnInit }           from '@angular/core';

import { D3Service,
  D3,
  D3DragEvent,
  D3ZoomEvent,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Transition,
  Selection }         from 'd3-ng2-service';
var d3;
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() data: any;
  @Input() key: string;
  @Input() xKey: string;

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
  public d3: D3;

  constructor(private element: ElementRef, private d3Service: D3Service) {
    this.htmlElement = this.element.nativeElement;
    this.d3 = d3Service.getD3();
    this.host = this.d3.select(this.element.nativeElement);
  }

  ngOnInit() {
    d3 = this.d3;
    this.setup();
    this.buildSVG();
  }

  ngOnChanges(): void {
    if (!this.data) return;
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
    this.host.html('');
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
    // console.log('.key', this.key)
    this.yScale.domain([0, d3.max(this.data, (d) => d[this.key])])

    this.xScale.domain(this.data.map((d) => d["Country"]))
      .paddingInner(0.1);
    let group = this.svg.append('g')
    let bars = group.selectAll('.bar').data(this.data)
    let exit = bars.exit().remove().style("opacity", 1).transition(this.t).style("opacity", 0).attr("height", 0);
    let entering = bars
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => this.xScale(d["Country"]))
      .attr("width", this.xScale.bandwidth())
      .attr("y", (d) => this.yScale(d[this.key]))
      .style("opacity", 0)
      .transition(this.t)
      .style("opacity", 1)
      .attr("height", (d) => (this.height - this.yScale(d[this.key])))
      .transition(this.t)
      .style("fill", (d, i) => d.color)
      console.log('bars', bars)


      // .style("fill", "grey")
      // .transition(this.t)
      // .style("opacity", 0);
      console.log('exit', exit)

  }
}
