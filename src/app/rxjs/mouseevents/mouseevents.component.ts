import { Component,
         OnInit }     from '@angular/core';
import { Observable}  from "rxjs/Observable";

// import { D3Service,
//          D3,
//          D3DragEvent,
//          D3ZoomEvent,
//          DSV,
//          ScaleOrdinal,
//          Axis,
//          BrushBehavior,
//          BrushSelection,
//          D3BrushEvent,
//          ScaleLinear,
//          Transition,
//          Selection }        from 'd3-ng2-service';

const t =`ngOnInit() {
  combined$.subscribe(
      (combined) => {
        this.text += combined[1];
      })

}`;

const click$ = Observable.fromEvent(document,'click');
const mouse$ = Observable.fromEvent(document,'mousemove')
    .filter((move:MouseEvent) => move.clientY >=200);
const keydown = Observable.fromEvent(document,'keydown')
const code = Observable.from(t);
// const combined$ = Observable.combineLatest(mouse$, click$);
const combined$ = Observable.zip(keydown, code);


@Component({
  selector: 'app-mouseevents',
  templateUrl: './mouseevents.component.html',
  styleUrls: ['./mouseevents.component.scss']
})
export class MouseeventsComponent implements OnInit {
  text: string = "";
  // code: string = "@Component({})";
  constructor() { }

  ngOnInit() {
    combined$.subscribe(
        (combined) => {
          this.text += combined[1];
        })

  }

  clicked() {

  }///clicked

}
