
import { trigger, state, transition, group, style, keyframes, AnimationTransitionEvent, animate } from '@angular/core'
var animations =
{ 'flyInOut': trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([//timing: string | number, styles?: AnimationStyleMetadata | AnimationKeyframesSequenceMetadata
        style({opacity: 0, transform: 'translateX(-100%)',  offset: 0}),
        style({opacity: 1, transform: 'translateX(500px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',      offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',      offset: 0}),
        style({opacity: 1, transform: 'translateX(-500px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',   offset: 1.0})
      ]))
    ])
  ]),
  'datumState': trigger('datumState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: 'blue',//'#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ]),
  'refugeeCount': trigger('refugeeCount',[
    state('grow', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.6s 0.1s ease', style({
          transform: 'translateX(0)',
          width: '*'
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
}

export const Animations = animations;
