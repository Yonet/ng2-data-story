import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { SlidesComponent }  from './slides.component';
import { Slides }    from './slides.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SlidesComponent ],
  exports: [ SlidesComponent ],
  providers: [ Slides ]
})
export class SlidesModule { }
