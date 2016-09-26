import { Component,
         OnInit }         from '@angular/core';
import { Observable }     from "rxjs/Observable";
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
  private d3: D3;
  constructor(private d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

  ngOnInit() {
  }
  clicked() {
    let circle = this.d3.select('circle');
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
