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
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //       animate(300, keyframes([//timing: string | number, styles?: AnimationStyleMetadata | AnimationKeyframesSequenceMetadata
  //         style({opacity: 0, transform: 'translateX(-100%)',  offset: 0}),
  //         style({opacity: 1, transform: 'translateX(500px)',  offset: 0.3}),
  //         style({opacity: 1, transform: 'translateX(0)',      offset: 1.0})
  //       ]))
  //     ]),
  //     transition('* => void', [
  //       animate(300, keyframes([
  //         style({opacity: 1, transform: 'translateX(0)',      offset: 0}),
  //         style({opacity: 1, transform: 'translateX(-500px)', offset: 0.7}),
  //         style({opacity: 0, transform: 'translateX(100%)',   offset: 1.0})
  //       ]))
  //     ])
  //   ]),
  //   trigger('datumState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active',   style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
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
