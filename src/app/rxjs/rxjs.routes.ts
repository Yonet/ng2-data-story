import { Route }                from '@angular/router';

import { RxjsComponent  }       from './rxjs.component';
import { MouseeventsComponent } from './mouseevents/mouseevents.component';

export const RxjsRoutes: Route[] = [
  {
    path: '',
    component: RxjsComponent
  },
  {
    path: 'type',
    component: MouseeventsComponent
  }
];
