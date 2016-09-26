import { Component,
         EventEmitter,
         Output,
         OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-sidenav',
  templateUrl: './slide-sidenav.component.html',
  styleUrls: ['./slide-sidenav.component.scss']
})
export class SlideSidenavComponent implements OnInit {
  @Output() newSlide : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addSlide() {
    let newSlide = {};
    console.log('newSlide')
    this.newSlide.emit(newSlide)
  }

}
