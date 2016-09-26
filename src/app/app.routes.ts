import { Routes }         from '@angular/router';

import { RxjsRoutes }     from './rxjs/rxjs.routes';
import { PovertyRoutes }  from './poverty/poverty.routes';
import { RefugeesRoutes } from './refugees/refugees.routes';

export const routes: Routes = [
  ...PovertyRoutes,
  ...RxjsRoutes,
  ...RefugeesRoutes
];
