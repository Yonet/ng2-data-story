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

  }

  addData (name) {
    this.dataService.addData(name);
  }

}
