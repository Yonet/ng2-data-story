import { Component,
         OnInit,
         Input,
         trigger,
         state,
         transition,
         style,
         keyframes,
         AnimationTransitionEvent,
         animate }      from '@angular/core';

import { Animations } from '../animations'


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.sass'],
  animations: [Animations.flyInOut, Animations.datumState]
})
export class AnimationsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }
  animationStarted(event: AnimationTransitionEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationTransitionEvent) {
    console.warn('Animation done: ', event);
  }
}
