import { Component,
         OnInit }         from '@angular/core';
import { Observable }     from "rxjs/Observable";
import * as d3            from 'd3';

const click$ = Observable.fromEvent(document,'click');

const mouse$ = Observable.fromEvent(document,'mousemove')
    .filter((move:MouseEvent) => move.clientY >=200);


const combined$ = Observable.combineLatest(mouse$, click$);

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  button;
  constructor() { }

  ngOnInit() {
  }
  clicked() {
    let circle = d3.select('circle');
    console.log('circle is ', circle);
    combined$.subscribe(
        (combined) => {
          console.log(combined[0].clientX);
          console.log('circle is ', circle);
          circle.attr('transform', 'translate(' + combined[0].clientX + ',' + combined[0].clientY + ')' );
          // return;
        })
  }

}
