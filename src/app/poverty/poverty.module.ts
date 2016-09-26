import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { SharedModule }           from '../shared/shared.module';
import { PovertyComponent }       from './poverty.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ PovertyComponent, HorizontalBarComponent ]
})
export class PovertyModule { }
