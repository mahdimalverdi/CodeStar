import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

const slideInAnimationTiming = '0.5s ease-in-out';
export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], {optional: true}),
    query(':leave', [
      style({opacity: 1})
    ], {optional: true}),
    query(':enter', [
      style({opacity: 0})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate(slideInAnimationTiming, style({opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        animate('0.5s ' + slideInAnimationTiming, style({opacity: 1}))
      ], {optional: true})
    ]),
    query(':enter', animateChild(), {optional: true})
  ])
]);

export const preventInitialChildAnimations = trigger('preventInitialChildAnimations', [
  transition(':enter', [
    query(':enter', [], {optional: true})
  ])
]);
