import { Component,
         OnInit,
         AfterViewInit,
         ElementRef,
         Input }      from '@angular/core';
import { Observable } from '../../app.rx';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit, AfterViewInit {
  @Input() buttons;
  els: any;
  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {

    this.els = this.element.nativeElement.children;
    var clickListItem = Observable.fromEvent(this.els, 'click');
    clickListItem.subscribe((el) => console.log("clicked", el))
  }

  ngOnInit() {

  }

}
