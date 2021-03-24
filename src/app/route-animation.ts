import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);

export const carouselAnimation = trigger('carouselAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(+500px)' }),
    animate(
      '300ms ease-in',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '300ms ease-out',
      style({ opacity: 0, transform: 'translateX(-500px)' })
    ),
  ]),
])
