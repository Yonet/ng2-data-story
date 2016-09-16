
import { trigger, state, transition, style, keyframes, AnimationTransitionEvent, animate } from '@angular/core'
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
  ])
}

export const Animations = animations;
