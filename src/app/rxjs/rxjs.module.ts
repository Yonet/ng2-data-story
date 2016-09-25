import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { RxjsComponent } from './rxjs.component';
import { MouseeventsComponent } from './mouseevents/mouseevents.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RxjsComponent, MouseeventsComponent]
})
export class RxjsModule { }
