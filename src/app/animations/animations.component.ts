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

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.sass'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
//   animations: [
//     trigger('datumState', [
//       state('inactive', style({
//         backgroundColor: '#eee',
//         transform: 'scale(1)'
//       })),
//       state('active',   style({
//         backgroundColor: '#cfd8dc',
//         transform: 'scale(1.1)'
//       })),
//       transition('inactive => active', animate('100ms ease-in')),
//       transition('active => inactive', animate('100ms ease-out'))
//     ]),
//     trigger('flyInOut', [
//       state('in', style({transform: 'translateX(0)'})),
//       transition('void => *', [
//         style({transform: 'translateX(-100%)'}),
//         animate(100)
//       ]),
//       transition('* => void', [
//         animate(100, style({transform: 'translateX(100%)'}))
//       ])
//     ])
//   ]
// })
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
