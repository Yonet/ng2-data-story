import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { MdButtonModule }         from '@angular2-material/button';
import { MdCardModule }           from '@angular2-material/card';

import { SlidesComponent }        from './slides.component';
import { Slides }                 from './slides.service';
import { SlideSidenavComponent }  from './slide-sidenav/slide-sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [ SlidesComponent, SlideSidenavComponent ],
  exports: [ SlidesComponent ],
  providers: [ Slides ]
})
export class SlidesModule { }
