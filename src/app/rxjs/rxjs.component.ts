import { Component,
         OnInit }         from '@angular/core';
import { Observable }     from "rxjs/Observable";


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
    combined$.subscribe(
        combined => console.log(combined[0])
    );
  }

}
