import { Component,
         Input,
         OnInit }           from '@angular/core';
// import * as d3              from 'd3';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {

  }

}
