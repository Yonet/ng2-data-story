import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { BarComponent }         from '../bar/bar.component';
import { AnimationsComponent }  from '../animations/animations.component';

import { SharedModule }         from '../shared/shared.module';
import { RefugeesComponent }    from './refugees.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RefugeesComponent, BarComponent, AnimationsComponent]
})
export class RefugeesModule { }
